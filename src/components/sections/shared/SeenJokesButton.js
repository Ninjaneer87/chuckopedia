import React from "react";
import { showJokesModal } from "./SeenJokesModal";
import classes from "./SeenJokesButton.module.css";

const SeenJokesButton = () => {
  return (
    <button className={`${classes.root} jumpIn`} onClick={showJokesModal}>
      <span>
        <i className="far fa-eye fa-lg"></i> &nbsp;Seen facts
      </span>
    </button>
  );
};

export default SeenJokesButton;
