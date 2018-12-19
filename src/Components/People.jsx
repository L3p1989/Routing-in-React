import React, { Component } from "react";
import { Row } from "reactstrap";
import PeopleCard from "./PeopleCard";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(peoples => this.setState({ peoples }));
  } //grabs People and creates json object named peoples

  render() {
    return (
      <Row>
        {this.state.peoples.map(people => {
          return <PeopleCard key={people.id} people={people} />;
          //maps peoples json objects array into a JS people object for each peoples object for PeopleCard to use
        })}
      </Row>
    );
  }
}

export default People;
