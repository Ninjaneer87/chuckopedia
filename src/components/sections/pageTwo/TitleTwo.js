import React from 'react';
import classes from './TitleTwo.module.css';

const TitleTwo = ({title}) => {
  return (
    <h2 className={classes.root + ' fadeIn'}>{title}</h2>
  );
};

export default TitleTwo;