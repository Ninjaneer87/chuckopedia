import React from 'react';
import classes from './SeenCard.module.css';

const SeenCard = ({joke, i}) => {
  return (
    <div
      className={`${classes.root} jumpIn`}
      style={{
        animationDelay: `${i * 0.1}s`,
      }}
    >
      <div className={classes.value}>{joke.value}</div>
      <div className={classes.category}>{joke.categories[0]}</div>
    </div>
  );
};

export default SeenCard;