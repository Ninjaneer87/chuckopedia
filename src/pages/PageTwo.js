import React, { useContext, useEffect } from "react";
import JokesListTwo from "../components/sections/pageTwo/JokesListTwo";
import TitleTwo from "../components/sections/pageTwo/TitleTwo";
import { addSeenJokes } from "../components/sections/shared/SeenJokes";
import SeenJokesButton from "../components/sections/shared/SeenJokesButton";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import UnableFetch from "../components/UI/UnableFetch";
import CategoriesContext from "../context/categoriesContext";
import useMultiHttp from "../hooks/useMultiHttp";
import { createJokesUrl } from "../utility";

const PageTwo = () => {
  const { categories } = useContext(CategoriesContext);
  const {
    data: jokes,
    error,
    loading,
  } = useMultiHttp(createJokesUrl(categories[1]), 5);

  useEffect(() => {
    addSeenJokes(jokes);
  }, [jokes]);

  return (
    <section>
      {loading ? <Loader /> : (
        <Container maxWidth={1280}>
          <TitleTwo title={categories[1]} />
          <JokesListTwo jokes={jokes} />
          {error && <UnableFetch />}
          <SeenJokesButton />
        </Container>
      )}
    </section>
  );
};

export default PageTwo;
