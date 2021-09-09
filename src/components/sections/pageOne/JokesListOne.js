import React from "react";
import CardOne from "../../cards/CardOne";
import Grid from "../../UI/Grid";

const JokesListOne = ({ jokes }) => {
  return (
    <section>
      <Grid container justify="center">
        {jokes.map((joke, i) => (
          <Grid item xs={12} sm={6} md={4} spacing={1} key={joke.id + i}>
            <CardOne joke={joke} i={i} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default React.memo(JokesListOne);
