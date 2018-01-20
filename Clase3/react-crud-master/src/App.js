import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postDescription: "",
      selectedPostID: null
    };
    
    // Handlers
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    fetch("https://react-demo-api.herokuapp.com/posts")
      .then(res => res.json())
      .then(results => {
        this.setState({
          posts: results
        });
      });
      this.textInput.focus()
  }
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
              ref={input => (this.textInput = input)}
              type="text"
              onChange={this.handleChange}
              value={this.state.postDescription}
            />
            <button type="submit">Save</button>
          </form>
          <PostList posts={this.state.posts} editPost={this.handleEdit} deletePost={this.handleDelete} />
        </div>
      </div>
    );
  }
  handleDelete(id) {
    fetch(`https://react-demo-api.herokuapp.com/posts/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          posts: this.state.posts.filter(p => p.id !== id)
        });
      });
  }

  handleChange(e) {
    this.setState({
      postDescription: e.target.value
    });
  }
  handleSave(e) {
    // Previen comportamiento por defecto
    // de enviar informacion al servidor
    // y resetear el formulario
    e.preventDefault();    
    if (this.state.selectedPostID) {
      fetch(`https://react-demo-api.herokuapp.com/posts/${this.state.selectedPostID}`, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify({
          description: this.state.postDescription
        })
      })
        .then(res => res.json())
        .then(createdPost => {
          //obtenemos indice del post esditado
          const index = this.state.posts.findIndex(p => p.id === this.state.selectedPostID)
          this.setState(prevState => ({
            posts: prevState.posts.concat({
              id: createdPost.id,
              description: this.state.postDescription
            }),
            postDescription: ""
          }));
          this.textInput.focus();
        });
      
      
    }

    fetch("https://react-demo-api.herokuapp.com/posts/", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        description: this.state.postDescription
      })
    })
      .then(res => res.json())
      .then(createdPost => {
        this.setState(prevState => ({
          posts: prevState.posts.concat({
            id: createdPost.id,
            description: this.state.postDescription
          }),
          postDescription: ""
        }));
        this.textInput.focus();
      });
  }
  handleEdit(id){
    const editedPost = this.state.posts.find(p => p.id === id);
    this.setState ({
      postDescription: editedPost.description,
      selectedPostID: editedPost.id,
    })
  }
}

export default App;
