import React from 'react';
import classes from './TitleOne.module.css';

const TitleOne = ({title}) => {
  return (
    <h2 className={classes.root + ' fadeIn'}>{title}</h2>
  );
};

export default TitleOne;