import React, { Component } from "react";

class Student extends Component {
  render() {
    const { firstName, lastName, dni } = this.props;
    console.log(firstName);

    return (
      <p>
        {firstName} test
        {lastName}
      </p>
    );
  }
}

export default Student;
