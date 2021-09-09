import React, { useCallback, useState } from "react";
import { createContext } from "react";

const savedJokes = JSON.parse(localStorage.getItem("seenJokes")) || [];

const SeenJokesContext = createContext({
  seenJokes: [],
  setSeenJokes: (jokes) => {},
  addSeenJokes: (jokes) => {},
  clearSeenJokes: () => {},
});

export const SeenJokesContextProvider = (props) => {
  const [seenJokes, setSeenJokes] = useState(savedJokes);

  const addSeenJokes = useCallback((jokes) => {
    const seenJokesIds = seenJokes.map((joke) => joke.id);
    const jokesToAdd = [];
    jokes.forEach((joke) => {
      if (!seenJokesIds.includes(joke.id)) jokesToAdd.push(joke);
    });
    if(jokesToAdd.length > 0) {
      localStorage.setItem("seenJokes", JSON.stringify([...seenJokes, ...jokesToAdd]));
      setSeenJokes(prevJokes => [...prevJokes, ...jokesToAdd]);
    }
  }, [seenJokes]);

  const clearSeenJokes = useCallback(() => {
    const seenJokes = [];
    setSeenJokes(seenJokes);
    localStorage.setItem("seenJokes", JSON.stringify(seenJokes));
  }, []);

  const context = {
    seenJokes,
    setSeenJokes,
    addSeenJokes,
    clearSeenJokes,
  };

  return (
    <SeenJokesContext.Provider value={context}>
      {props.children}
    </SeenJokesContext.Provider>
  );
};

export default SeenJokesContext;
