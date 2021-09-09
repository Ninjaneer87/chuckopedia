import React from "react";
import classes from "./Loader.module.css";
import logoImg from "../../assets/images/logo.png";
import ReactDom from "react-dom";

const Loader = () => {
  return ReactDom.createPortal(
    <div className={classes.root}>
      <img src={logoImg} alt="chuck" className='scaleUpDown' />
    </div>,
    document.getElementById("portal")
  );
};

export default Loader;
