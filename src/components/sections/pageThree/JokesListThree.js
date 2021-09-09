import React from "react";
import CardThree from "../../cards/CardThree";
import Grid from "../../UI/Grid";

const JokesListThree = ({ jokes }) => {
  return (
    <section>
      <Grid container justify="center">
        {jokes.map((joke, i) => (
          <Grid item xs={12} sm={6} md={4} spacing={1} key={joke.id + i}>
            <CardThree joke={joke} i={i} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default React.memo(JokesListThree);
