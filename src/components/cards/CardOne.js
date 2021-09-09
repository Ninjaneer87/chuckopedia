import React from 'react';
import classes from './CardOne.module.css';

const CardOne = ({joke, i}) => {
  return (
    <div
      className={`${classes.root} scaleIn`}
      style={{
        animationDelay: `${i * 0.1}s`,
      }}
    >
      <div className={classes.value}>{joke.value}</div>
    </div>
  );
};

export default CardOne;