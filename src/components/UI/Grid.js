import React, { useContext, useEffect, useState } from "react";
import LayoutContext, { breakpoints } from "../../context/layoutContext";
import classes from "./Grid.module.css";

const Grid = (props) => {
  const { windowWidth } = useContext(LayoutContext);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let width = 0;
    let prevValue = 12;
    for (let key in breakpoints) {
      if (windowWidth > breakpoints[key]) {
        if (props[key]) {
          width = `${(1 / 12) * props[key] * 100}%`;
          prevValue = props[key];
        } else {
          width = `${(1 / 12) * prevValue * 100}%`;
        }
      }
    }
    setWidth(width);
  }, [windowWidth, props]);

  return (
    <div
      className={
        props.container
          ? classes.container
          : classes.item 
          + ' ' +
        props.className
          ? props.className
          : ""
      }
      style={{
        width: props.item && width,
        padding: props.item && props.spacing / 2 + "rem",
        marginTop: props.item && props.mt / 2 + "rem",
        ...(props.style || ""),
        justifyContent: props.container && (props.justify || "flex-start"),
      }}
    >
      {props.children}
    </div>
  );
};

export default Grid;
