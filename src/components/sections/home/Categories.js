import React, { useContext } from "react";
import classes from "./Categories.module.css";
import { Link } from "react-router-dom";
import CategoriesContext from "../../../context/categoriesContext";
import { hideModal } from "../../UI/Modal";

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <nav>
      <ul className={classes.navList}>
        {categories.map((cat, i) => (
          <li
            className={classes.navItem + " jumpIn"}
            style={{ animationDelay: `${i * 0.15}s` }}
            key={cat}
          >
            <Link onClick={hideModal} to={`/${cat}`}>
              {cat.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
