import React, { Component } from "react";

class Student extends Component {
  render() {
    const { firstName, lastName, dni } = this.props;
    console.log(firstName);

    return (
      <ul>
        <li>{firstName} </li>
        <li>{lastName} </li>
        <li>{dni} </li>
      </ul>
    );
  }
}

export default Student;
