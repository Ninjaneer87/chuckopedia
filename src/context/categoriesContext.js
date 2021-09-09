import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import useHttp from "../hooks/useHttp";
import { threeRandomItems } from "../utility";

const savedCategories = JSON.parse(localStorage.getItem("categories"));

const CategoriesContext = createContext({
  categories: [],
  categoriesError: null,
  categoriesLoading: false,
  setCategories: (categories) => {},
  randomizeCategories: (categories) => {},
});

export const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const { data, error, loading, getData } = useHttp(
    "https://api.chucknorris.io/jokes/categories"
  );

  const loadCategories = useCallback((categories) => {
    setCategories(categories);
  }, []);

  const randomizeCategories = useCallback(() => {
    if (!data) return getData();

    const randomCategories = threeRandomItems(data);
    localStorage.setItem("categories", JSON.stringify(randomCategories));
    setCategories(randomCategories);
  }, [data, getData]);

  useEffect(() => {
    if (savedCategories) {
      setCategories(savedCategories);
    } else {
      if (data) randomizeCategories(data);
    }
  }, [data, randomizeCategories]);

  const context = {
    categories,
    categoriesError: error,
    categoriesLoading: loading,
    setCategories: loadCategories,
    randomizeCategories,
  };

  return (
    <CategoriesContext.Provider value={context}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
