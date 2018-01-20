import React, { Component } from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderImage from "./HeaderImage";

class Header extends Component {
  constructor(props) {
    super();

    this.state = {
      showImage: true,
      counter: 0,
      title: "",
      titles: props.titles && props.titles.map(title => title)
    };
  }

  handleClick = () => {
    const { showImage, counter } = this.state;

    this.setState({
      showImage: !showImage,
      counter: counter + 1
    });
  };

  handleAddTitle = () => {
    const { title, titles } = this.state;

    const titlesCopy = titles.map(title => title);

    titlesCopy.push(title);

    this.setState({
      titles: titlesCopy
    });
  };

  handlChange = event => {
    const value = event.target.value;

    this.setState({
      title: value
    });
  };

  render() {
    const { showImage, counter, titles } = this.state;

    return (
      <header className="App-header" onClick={this.handleClick}>
        {showImage ? <HeaderImage /> : null}
        {<h3>{counter}</h3>}

        {titles &&
          titles.map(title => <HeaderTitle key={title} title={title} />)}
      </header>
    );
  }
}

export default Header;
