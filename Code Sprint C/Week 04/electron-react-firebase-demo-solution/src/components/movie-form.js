import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./movie-form.css";

function MovieForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.rating === undefined) initialState.rating = 3;
  if (initialState.releaseYear === undefined) initialState.releaseYear = 2020;

  const [title, setTitle] = useState(initialState.title);
  const [rating, setRating] = useState(initialState.rating);
  const [releaseYear, setReleaseYear] = useState(initialState.releaseYear);
  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onYearReleasedChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const onMovieSumbit = async (event) => {
    event.preventDefault();
    onSubmit(title, rating, releaseYear);
  };

  return (
    <form className="movie-form" onSubmit={onMovieSumbit}>
      <h2 className="movie-form__title">Movie Details</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>
        <label className="movie-form__label">Movie Title:</label>
        <input className="movie-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="movie-form__label">Rating:</label>
        <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="movie-form__label">Year Released:</label>
        <input
          className="movie-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default MovieForm;
