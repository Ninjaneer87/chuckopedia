import AppBar from "./AppBar";
import Notification from "../UI/Notification";
import Modal, { hideModal } from "../UI/Modal";
import classes from './Layout.module.css'
import SideNav from "./SideNav";
import { useEffect } from "react";
import LayoutContext from "../../context/layoutContext";
import { useContext } from "react/cjs/react.development";
import useDarkMode from "use-dark-mode";
import SeenJokesModal, { hideJokesModal } from "../sections/shared/SeenJokesModal";
import ScrollTop from "../UI/ScrollTop";
import { useLocation } from "react-router";

const Layout = (props) => {
  const { value: isDark } = useDarkMode(true);
  const { setDarkTheme } = useContext(LayoutContext);
  const location = useLocation();

  useEffect(() => {
    hideModal();
    hideJokesModal();
  }, [location])

  useEffect(() => {
    setDarkTheme(isDark)
  }, [isDark, setDarkTheme])

  return (
    <div>
      <AppBar />
      <main className={classes.page}>
        {props.children}
      </main>
      <Notification />
      <SideNav />
      <Modal />
      <SeenJokesModal />
      <ScrollTop />
    </div>
  );
};

export default Layout;