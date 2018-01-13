import React, { Component } from "react";

class Student extends Component {
  render() {
    const { firstName, lastName } = this.props;
    console.log(firstName);

    return (
      <p1>
        <h1>{firstName}</h1>
        <h2>Probando</h2>
      </p1>
    );
  }
}

export default Student;
