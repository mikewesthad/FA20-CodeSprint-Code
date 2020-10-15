import React from "react";
import { Link } from "react-router-dom";

function NamePage() {
  return (
    <main>
      <h1>Name Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>TODO: use input to capture player name</p>
      </form>
      <Link to="/type">Next ➡</Link>
    </main>
  );
}

export default NamePage;
