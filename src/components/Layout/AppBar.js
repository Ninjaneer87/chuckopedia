import classes from "./AppBar.module.css";
import Container from "../UI/Container";
import React, { useEffect } from "react";
import Logo from "../UI/Logo";
import { useInView } from "react-intersection-observer";
import { useContext } from "react/cjs/react.development";
import LayoutContext from "../../context/layoutContext";

const AppBar = () => {
  const { setIsScrolled } = useContext(LayoutContext);
  const { ref: toolbarScrollRef, inView: toolbarInView } = useInView({
    threshold: 1,
  });
  const isScrolled = !toolbarInView;

  useEffect(() => {
    setIsScrolled(isScrolled);
  }, [isScrolled, setIsScrolled]);

  return (
    <>
      <div ref={toolbarScrollRef}></div>
      <header
        className={`${classes.root} ${isScrolled ? classes.scrolled : ""}`}
      >
        <Container>
          <div className={classes.headerInner}>
            <Logo header />
          </div>
        </Container>
      </header>
    </>
  );
};

export default React.memo(AppBar);
