import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./DetailRecipe.css";

const Recipe = (props) => {
  const recipe = props.location.state.recipe;
  return (
    <Container>
      <div className="detail-recipe detail-recipe--white">
        <Row>
          <Col lg="5">
            <img
              src={recipe.image}
              alt={recipe.label}
              className="detail-recipe__image"
            />
          </Col>
          <Col lg="7">
            <div className="detail-recipe__body">
              <div className="detail-recipe__title">{recipe.label}</div>
              <div className="detail-recipe__description">
                Calorie : {Math.round(recipe.calories)}
              </div>
              <div className="detail-recipe__description">
                Health Labels :
                {recipe.healthLabels.map((healthLabel, i) => (
                  <span key={i}>{healthLabel},</span>
                ))}
              </div>
              <div className="detail-recipe__description">
                Ingredient
                <ul className="detail-recipe__ingredient">
                  {recipe.ingredients.map((ingredient, i) => {
                    return (
                      <li key={i}>
                        {ingredient.text}, weight :{" "}
                        {Math.round(ingredient.weight)} grm
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Recipe;
