import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LayoutContextProvider } from "./context/layoutContext";
import { CategoriesContextProvider } from "./context/categoriesContext";
import { SeenJokesContextProvider } from "./context/seenJokesContext";

ReactDOM.render(
  <React.StrictMode>
    <LayoutContextProvider>
      <CategoriesContextProvider>
        <SeenJokesContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SeenJokesContextProvider>
      </CategoriesContextProvider>
    </LayoutContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
