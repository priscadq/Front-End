import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import Header from "./Header";

const estudiante = {
  firstName: "Priscila",
  lastName: "Diaz Quiroga",
  dni: "32983099"
};

class App extends Component {
  render() {
    const { firstName, lastName } = estudiante;

    return (
      <div className="App">
        <Header />
        <Student
          firstName={estudiante && estudiante.firstName}
          lastName={estudiante && estudiante.lastName}
          dni={estudiante && estudiante.dni}
        />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
