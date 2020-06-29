import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardFooter,
  Button,
  Col,
} from "reactstrap";

import "./Recipe.css";

const Recipes = ({ recipe }) => {
  return (
    <Col sm="12" md="4" lg="3">
      <Card>
        <CardImg src={recipe.image} alt={recipe.label} />
        <CardBody>
          <CardTitle>{recipe.label}</CardTitle>
          <CardText>
            Calories: <br /> {Math.round(recipe.calories)}
          </CardText>
        </CardBody>
        <CardFooter>
          <Button color="primary">
            <Link
              to={{
                pathname: "/detail-recipe",
                state: {
                  recipe: recipe,
                },
              }}
              className="text-white"
            >
              Detail Recipe
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Recipes;
