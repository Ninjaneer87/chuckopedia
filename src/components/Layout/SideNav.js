import React, { useContext, useState } from "react";
import LayoutContext from "../../context/layoutContext";
import classes from "./SideNav.module.css";
import CategoriesContext from "../../context/categoriesContext";
import { useHistory } from "react-router";
import ReactDom from "react-dom";
import useDarkMode from "use-dark-mode";
import { clearSeenJokes } from "../sections/shared/SeenJokes";
import { showModal } from "../UI/Modal";
import Categories from "../sections/home/Categories";

const SideNav = () => {
  const [expanded, setExpanded] = useState(false);
  const { windowWidth, darkMode } = useContext(LayoutContext);
  const { toggle: toggleDarkMode } = useDarkMode();
  const isSmallScreen = windowWidth < 1100;

  const { randomizeCategories } = useContext(CategoriesContext);
  const history = useHistory();

  const handleShuffle = () => {
    randomizeCategories();
    history.replace("/");
  };
  const handleCategories = () => {
    showModal(<Categories />);
  }

  return ReactDom.createPortal(
    <div
      onMouseEnter={() => !isSmallScreen && setExpanded(true)}
      onMouseLeave={() => !isSmallScreen && setExpanded(false)}
      className={`
        ${classes.root}  
        ${expanded ? classes.expandedRoot : ""} 
        fadeIn
      `}
    >
      {isSmallScreen ? (
        <button
          onClick={() => setExpanded((prevExp) => !prevExp)}
          className={classes.item}
        >
          <span
            style={{ transition: "transform 300ms ease-in-out" }}
            className={expanded ? "rotate" : ""}
          >
            <i className="fas fa-chevron-left fa-2x"></i>
          </span>
        </button>
      ) : null}
      
      <button onClick={handleCategories} className={classes.item}>
        <i className="fas fa-tag fa-2x"></i>
        <span
          className={`${classes.name} ${expanded && classes.expanded}`}
        >
          Categories
        </span>
      </button>

      <button onClick={handleShuffle} className={classes.item}>
        <i className="fas fa-random fa-2x"></i>
        <span
          className={`${classes.name} ${expanded && classes.expanded}`}
        >
          Shuffle categories
        </span>
      </button>

      <button onClick={toggleDarkMode} className={classes.item}>
        {darkMode ? (
          <span key="fafafa">
            <i className="far fa-moon fa-2x"></i>
          </span>
        ) : (
          <span key="fefefe">
            <i className="far fa-sun fa-2x"></i>
          </span>
        )}

        <span
          className={`${classes.name} ${expanded && classes.expanded}`}
        >
          {darkMode ? "Night" : "Day"}
        </span>
      </button>

      <button onClick={clearSeenJokes} className={classes.item}>
        <span key="frfrfr">
          <i className="far fa-trash-alt fa-2x"></i>
        </span>

        <span
          className={`${classes.name} ${expanded && classes.expanded}`}
        >
          Clear seen facts
        </span>
      </button>
    </div>,
    document.getElementById("portal")
  );
};

export default React.memo(SideNav);
