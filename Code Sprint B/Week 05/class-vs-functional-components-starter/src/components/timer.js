import React, { useState, useEffect } from "react";

class TimerClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <p>{this.state.seconds} seconds have elapsed.</p>;
  }
}

export default TimerClassComponent;
