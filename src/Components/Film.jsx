import React, { Component } from "react";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: {}
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
      .then(res => res.json())
      .then(films => this.setState({ films }));
  } //fetches film based on id

  render() {
    const {
      title,
      description,
      director,
      producer,
      release_date
    } = this.state.films;
    return (
      <>
        <h1>{title}</h1>
        <h6>Released in {release_date}</h6>
        <p className="blockquote">{description}</p>
        <h6>Directed by: {director}</h6>
        <h6>Produced by: {producer}</h6>
      </>
    );
  }
}

export default Film;
