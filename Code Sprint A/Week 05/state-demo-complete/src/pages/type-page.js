import React from "react";
import { Link } from "react-router-dom";

function TypePage(props) {
  const { name, type, setType } = props;

  const onTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <main>
      <h1>Type Page</h1>
      <p>Welcome {name}, let's set up your type:</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Enter your type: <input type="text" value={type} onChange={onTypeChange} />
        </label>
      </form>
      <Link to="/game">Next ➡</Link>
    </main>
  );
}

export default TypePage;
