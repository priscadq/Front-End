import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import Header from "./Header";

const estudiantes = {
  firstName: "Priscila",
  lastName: "Diaz Quiroga",
  dni: "32983099"
};
/*
var estudiantes = [
  { firstName: "Adrián", lastName: "Ferré", dni: 54353353 },
  { firstName: "Mateo", lastName: "Molina", dni: 54533343 },
  { firstName: "Maria", lastName: "Fernandez", dni: 54353512 },
  { firstName: "Diego", lastName: "Forti", dni: 54533843 },
  { firstName: "Agustín", lastName: "Quevedo", dni: 54357512 }
];*/

class App extends Component {
  render() {
    const { firstName, lastName } = estudiantes;
    const titles = ["Clase 01", "Clase 02", "Clase 03", "Clase 04"];

    return (
      <div className="App">
        <Header titles={titles} />
        <Student estudiantes={estudiantes} />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
