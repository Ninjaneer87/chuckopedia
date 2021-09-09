import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import classes from "./Logo.module.css";

const Logo = () => {
  const { pathname } = useLocation();

  const logoHandler = () => {
    pathname === "/"
      ? document.body.scrollIntoView({ behavior: "smooth" })
      : window.scrollTo(0, 0);
  };

  return (
    <Link to="/" className={classes.root} onClick={logoHandler}>
      <div className={classes.logoText}>
        Chuck
        <img className={classes.logoImg} src={logoImg} alt="logo" />
        pedia
      </div>
    </Link>
  );
};

export default React.memo(Logo);
