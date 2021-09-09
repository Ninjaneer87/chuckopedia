import React, { useEffect, useCallback } from "react";
import useStorage from "../../../hooks/useStorage";
import Grid from "../../UI/Grid";
import ee from "event-emitter";
import { notify } from "../../UI/Notification";
import classes from './SeenJokes.module.css';
import SeenCard from "../../cards/SeenCard";

const emitter = new ee();
export const clearSeenJokes = () => {
  emitter.emit("clearSeenJokes");
};
export const addSeenJokes = (items) => {
  emitter.emit("addSeenJokes", items);
};

const SeenJokes = () => {
  const { data: seenJokes, clearData, addNewItems } = useStorage("seenJokes");

  const clearHandler = useCallback(() => {
    clearData("seenJokes");
    notify("Cleared seen facts!", "Success");
  }, [clearData]);

  const addHandler = useCallback(
    (jokes) => {
      addNewItems(jokes);
    },
    [addNewItems]
  );

  useEffect(() => {
    emitter.on("clearSeenJokes", clearHandler);
    emitter.on("addSeenJokes", addHandler);

    return () => {
      emitter.off("clearSeenJokes", clearHandler);
      emitter.off("addSeenJokes", addHandler);
    };
  }, [clearHandler, addHandler]);

  return (
    <div>
      {seenJokes.length > 0 ? (
        <>
        <h3 className={classes.heading}>What you've learned so far</h3>
        <Grid container justify="center">
          {seenJokes?.map((joke, i) => (
            <Grid item xs={12} spacing={1} mt={2} key={joke.id + i}>
              <SeenCard joke={joke} i={i} />
            </Grid>
          ))}
        </Grid>
        </>
      ) : 
      <h3 className={classes.heading}>Nothing to see here...</h3>
      }
    </div>
  );
};

export default React.memo(SeenJokes);
