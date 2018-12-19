import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import { Link } from "react-router-dom";

const FilmCard = props => {
  const { title, description, id } = props.film;
  return (
    <Col sm="6">
      <Card body>
        <CardTitle>
          <Link to={"/films/" + id}>{title}</Link>
        </CardTitle>
        <CardText>{description}</CardText>
      </Card>
    </Col>
  );
}; //creates a card for all films objects and places individual film title and description into the card

export default FilmCard;
