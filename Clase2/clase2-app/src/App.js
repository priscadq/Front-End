import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
