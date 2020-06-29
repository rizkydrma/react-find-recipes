import React from "react";
import DetailRecipe from "./components/Recipe/DetailRecipe/DetailRecipe";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">
            <h1 className="header__title header__title--white">FindRecipes</h1>
          </Link>
        </div>

        <Route path="/" component={Home} exact />
        <Route path="/detail-recipe" component={DetailRecipe} />
      </div>
    </Router>
  );
};

export default App;
