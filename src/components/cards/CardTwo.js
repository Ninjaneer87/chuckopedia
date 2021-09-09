import React from 'react';
import classes from './CardTwo.module.css';

const CardTwo = ({joke, i}) => {
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

export default CardTwo;