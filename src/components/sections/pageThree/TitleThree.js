import React from 'react';
import classes from './TitleThree.module.css';

const TitleThree = ({title}) => {
  return (
    <h2 className={classes.root + ' fadeIn'}>{title}</h2>
  );
};

export default TitleThree;