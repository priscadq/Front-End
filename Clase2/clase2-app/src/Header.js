import React, { Component } from "react";
import HeaderImage from "./HeaderImage";
import HeaderTitle from "./HeaderTitle";

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

        <HeaderTitle />
      </header>
    );
  }
}

export default Header;
