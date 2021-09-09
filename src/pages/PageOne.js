import React, { useContext, useEffect } from "react";
import JokesListOne from "../components/sections/pageOne/JokesListOne";
import TitleOne from "../components/sections/pageOne/TitleOne";
import { addSeenJokes } from "../components/sections/shared/SeenJokes";
import SeenJokesButton from "../components/sections/shared/SeenJokesButton";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import UnableFetch from "../components/UI/UnableFetch";
import CategoriesContext from "../context/categoriesContext";
import useMultiHttp from "../hooks/useMultiHttp";
import { createJokesUrl } from "../utility";

const PageOne = () => {
  const { categories } = useContext(CategoriesContext);
  const {
    data: jokes,
    error,
    loading,
  } = useMultiHttp(createJokesUrl(categories[0]), 5);

  useEffect(() => {
    addSeenJokes(jokes);
  }, [jokes]);

  return (
    <section>
      {loading ? <Loader /> : (
        <Container maxWidth={1280}>
          <TitleOne title={categories[0]} />
          <JokesListOne jokes={jokes} />
          {error && <UnableFetch />}
          <SeenJokesButton />
        </Container>
      )}
    </section>
  );
};

export default PageOne;
