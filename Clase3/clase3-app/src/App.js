import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";

class App extends Component {
  //const posts = []; una forma de hacerlo
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    //Handlers- crear los hanlders del constructor anteriormente
    this.handleDelete = this.handleDelete.bind(this); //muy importante aprender a manejar bind!
  }
  componentDidMount() {
    fetch("http://react-demo-api.herokuapp.com/posts") //busca la data, promete ir a buscar la info
      .then(res => res.json()) //no es legible para react, asi que la convierte en json
      .then(results => {
        console.log(results); //probando si se loguea correcto
        this.setState({
          posts: results //de esta manera se pisa la data q trajo en posts
        });
      });
  }
  //foreach no devuelve nada, sirve para modificar datos. .map es para devolver algo
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <PostList posts={this.state.posts} deletePosts={this.handleDelete} />
        </div>
      </div>
    );
  }

  handleDelete(id) {
    console.log(id);
    fetch(
      `
    http://react-demo-api.herokuapp.com/posts/${id}`,
      {
        mehthod: "DELETE"
      }
    ) //` sirve para agregar mas cosas en un ""
      .then(res => res.json())
      .then(result => {
        this.setState({
          posts: this.state.posts.filter(p => p.id !== id) //todos menos el .id q buscamos
        });
      });
  }
}

export default App;
