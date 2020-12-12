import React from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import useDeleteMovie from "../hooks/use-delete-movie";
import "./movie.css";

function Movie(props) {
  const { id, data, userId } = props;
  const { title, releaseYear, rating, review } = data;
  const history = useHistory();
  const [isDeleting, errorMessage, deleteMovie] = useDeleteMovie(userId, id);
  const ratingString = "💜".repeat(rating) + "🤍".repeat(5 - rating);

  return (
    <div className="movie">
      <div className="movie__contents">
        <div className="movie__title">{title}</div>
        <div className="movie__rating">{ratingString}</div>
        <div className="movie__year">{releaseYear}</div>
        <div className="movie__review">{review ? review : "No review saved."}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="movie__button" disabled={isDeleting} onClick={deleteMovie}>
          <Delete />
        </button>
        <button className="movie__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Movie;
