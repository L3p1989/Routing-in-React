import React, { Component } from "react";
import { Row } from "reactstrap";
import FilmCard from "./FilmCard";

class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }));
  } //grabs films and creates json object named films

  render() {
    return (
      <Row>
        {this.state.films.map(film => {
          return <FilmCard key={film.id} film={film} />;
          //maps films json objects array into a JS film object for each films object for FilmCard to use
        })}
      </Row>
    );
  }
}

export default Films;
