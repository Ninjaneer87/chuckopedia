import React from 'react';
import classes from './CardThree.module.css';

const CardThree = ({joke, i}) => {
  return (
    <div
      className={`${classes.root} jumpIn`}
      style={{
        animationDelay: `${i * 0.1}s`,
      }}
    >
      <div className={classes.value}>{joke.value}</div>
    </div>
  );
};

export default CardThree;