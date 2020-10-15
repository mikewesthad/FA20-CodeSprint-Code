import React from "react";
import { Link } from "react-router-dom";

function TypePage() {
  return (
    <main>
      <h1>Type Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>TODO: use input to capture player type</p>
      </form>
      <Link to="/game">Next ➡</Link>
    </main>
  );
}

export default TypePage;
