import React, { Component } from "react";
//import HeaderTitle from "./EstudiantesLista";

class Student extends Component {
  constructor(props) {
    super();

    this.state = {
      estud: "",
      estudiantes:
        props.estudiantes && props.estudiantes.map(estudiante => estudiante)
    };
  }

  render() {
    const { estudiantes } = this.state;

    console.log(estudiantes.firstName);

    return (
      <ul>
        <li>
          {estudiantes.firstName} {estudiantes.lastName} {estudiantes.dni}
        </li>
      </ul>
    );
  }
}

export default Student;
