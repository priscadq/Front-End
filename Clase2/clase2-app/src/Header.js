import React, { Component } from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderImage from "./HeaderImage";

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      showImage: true,
      counter: 0
    };
  }

  handleClick = () => {
    const { showImage, counter } = this.state;
    this.setState({
      showImage: !showImage,
      counter: counter + 1
    });
  };

  render() {
    const { showImage, counter } = this.state;

    return (
      <header className="App-header" onClick={this.handleClick}>
        {showImage ? <HeaderImage /> : null}
        {<h3>{counter}</h3>}
        <HeaderTitle />
      </header>
    );
  }
}

export default Header;
