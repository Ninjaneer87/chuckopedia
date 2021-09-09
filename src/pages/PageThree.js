import React, { useContext, useEffect } from "react";
import JokesListThree from "../components/sections/pageThree/JokesListThree";
import TitleThree from "../components/sections/pageThree/TitleThree";
import { addSeenJokes } from "../components/sections/shared/SeenJokes";
import SeenJokesButton from "../components/sections/shared/SeenJokesButton";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import UnableFetch from "../components/UI/UnableFetch";
import CategoriesContext from "../context/categoriesContext";
import useMultiHttp from "../hooks/useMultiHttp";
import { createJokesUrl } from "../utility";

const PageThree = () => {
  const { categories } = useContext(CategoriesContext);
  const {
    data: jokes,
    error,
    loading,
  } = useMultiHttp(createJokesUrl(categories[2]), 5);
  
  useEffect(() => {
    addSeenJokes(jokes);
  }, [jokes]);

  return (
    <section>
      {loading ? <Loader /> : (
        <Container maxWidth={1280}>
          <TitleThree title={categories[2]} />
          {error && <UnableFetch />}
          <JokesListThree jokes={jokes} />
          <SeenJokesButton />
        </Container>
      )}
    </section>
  );
};

export default PageThree;
