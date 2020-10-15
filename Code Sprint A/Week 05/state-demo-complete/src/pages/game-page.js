import React from "react";

function GamePage(props) {
  return (
    <main>
      <h1>Game Page</h1>
      <p>
        Welcome {props.name}, the {props.type}, to the adventure.
      </p>
      <p>Let's go!</p>
    </main>
  );
}

export default GamePage;
