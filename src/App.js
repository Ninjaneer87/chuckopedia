import { useContext } from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import CategoriesContext from "./context/categoriesContext";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import NotFound from "./pages/NotFound";

function App() {
  const { categories } = useContext(CategoriesContext);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/${categories[0]}`}>
          <PageOne />
        </Route>

        <Route path={`/${categories[1]}`}>
          <PageTwo />
        </Route>

        <Route path={`/${categories[2]}`}>
          <PageThree />
        </Route>
        

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
