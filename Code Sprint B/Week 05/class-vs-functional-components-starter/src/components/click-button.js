import React, { useState } from "react";

class ClickButtonClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return <button onClick={this.onButtonClick}>Clicks: {this.state.clicks}</button>;
  }
}

export default ClickButtonClassComponent;
