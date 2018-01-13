import React, { Component } from "react";
import HeaderImage from "./HeaderImage";

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      showImage: true
    };
  }

  handleClick = () => {
    const { showImage } = this.state;
    this.setState({
      showImage: !showImage
    });
  };
  render() {
    const { showImage } = this.state;
    return (
      <header className="App-header" onClick={this.handleClick}>
        {showImage ? <HeaderImage /> : null}

        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
