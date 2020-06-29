import React, { useState, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../actions/recipesAction";

import FormSearch from "../../components/FormSearch/FormSearch";
import Recipes from "../../components/Recipe/Recipes";

const Home = () => {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const fetchData = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
    dispatch(getData(query));
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Fragment>
      <FormSearch
        fetchData={fetchData}
        updateSearch={updateSearch}
        search={search}
      />
      <Container>
        <Row>
          {state.recipes.map((recipe) => (
            <Recipes key={recipe.recipe.label} recipe={recipe.recipe} />
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
