import React from "react";

class WelcomeMessageClassComponent extends React.Component {
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}

export default WelcomeMessageClassComponent;
