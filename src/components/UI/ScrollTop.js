import React, { useCallback, useContext } from "react";
import LayoutContext from "../../context/layoutContext";
import classes from "./ScrollTop.module.css";
import ReactDom from 'react-dom';

const ScrollTop = () => {
  const { isScrolled } = useContext(LayoutContext);

  const scrollToTop = useCallback(() => {
    document.body.scrollIntoView({ behavior: "smooth" });
  }, []);

  return ReactDom.createPortal(
    <button
      onClick={scrollToTop}
      className={`${classes.scrolltopRoot} ${isScrolled ? classes.show : ''}`}
    >
      <i className="fas fa-chevron-up"></i>
    </button>,
    document.getElementById("portal")
  );
};

export default ScrollTop;
