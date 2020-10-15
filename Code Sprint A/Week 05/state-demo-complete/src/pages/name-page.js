import React from "react";
import { Link } from "react-router-dom";

function NamePage(props) {
  const { name, setName } = props;

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <main>
      <h1>Name Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Enter your name: <input type="text" value={name} onChange={onNameChange} />
        </label>
      </form>
      <Link to="/type">Next ➡</Link>
    </main>
  );
}

export default NamePage;
