import React from "react";
import CardTwo from "../../cards/CardTwo";
import Grid from "../../UI/Grid";
import classes from "./JokesListTwo.module.css";

const JokesListTwo = ({ jokes }) => {
  return (
    <section className={classes.root}>
      <Grid container justify="center">
        <div className={classes.overlay}>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
        {jokes.map((joke, i) => (
          <Grid item xs={12} spacing={1} key={joke.id + i}>
            <CardTwo joke={joke} i={i} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default React.memo(JokesListTwo);
