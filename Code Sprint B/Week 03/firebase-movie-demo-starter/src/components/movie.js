import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import ErrorMessage from "./error-message";
import "./movie.css";

function Movie(props) {
  const { id, data } = props;
  const { title, releaseYear, rating } = data;

  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteMovie = async () => {};

  return (
    <div className="movie">
      <div className="movie__contents">
        <div className="movie__title"></div>
        <div className="movie__rating"></div>
        <div className="movie__year"></div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="movie__button" disabled={isDeleting} onClick={deleteMovie}>
          <Delete />
        </button>
        <button className="movie__button" onClick={() => {}}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Movie;
