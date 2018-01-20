import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList";

class App extends Component {
  //const posts = []; una forma de hacerlo
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postDescription: "Hola"
    };

    //Handlers- crear los hanlders del constructor anteriormente
    this.handleDelete = this.handleDelete.bind(this); //muy importante aprender a manejar bind!
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("http://react-demo-api.herokuapp.com/posts") //busca la data, promete ir a buscar la info
      .then(res => res.json()) //no es legible para react, asi que la convierte en json
      .then(results => {
        //console.log(results); //probando si se loguea correcto
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
          <form onSubmit={this.handleSave}>
            <input
              onChange={this.handleChange}
              value={this.state.postDescription}
              type="text"
              //ref={input => (this.postDescription = input)} no usar este porque no se puede contrar con ref
            />
            <button type="submit">Save</button>
          </form>
          <PostList posts={this.state.posts} deletePosts={this.handleDelete} />
        </div>
      </div>
    );
  }

  handleDelete(id) {
    //console.log(id);
    fetch(`https://react-demo-api.herokuapp.com/posts/${id}`, {
      mehthod: "DELETE"
    }) //` sirve para agregar mas cosas en un ""
      .then(res => res.json())
      .then(result => {
        this.setState({
          posts: this.state.posts.filter(p => p.id !== id) //todos menos el .id q buscamos
        });
      });
  }

  handleSave(e) {
    e.preventDefault();
    debugger;
    //console.log(this.state.postDescription);
    fetch("http://react-demo-api.herokuapp.com/posts/", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      mehthod: "POST",
      body: JSON.stringify({
        description: this.state.postDescription
      })
    })
      .then(res => res.json())
      .then(createdPost => {
        //console.log(createdPost);
        this.setState(prevState => ({
          posts: prevState.posts.concat({
            id: createdPost.id,
            description: this.state.postDescription
          }),
          postDescription: ""
        }));
      })
      .catch(e => console.log(e));
  }
  handleChange(e) {
    this.setState({
      postDescription: e.target.value //target.value consigue el valor de la caja de texto,sino viene entero
    });
  }
}

export default App;
