import React, { useState } from "react";
import "./edit-movie.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";

function EditMovie(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movieData, setMovieData] = useState(null);

  const onMovieSubmit = async (title, rating, releaseYear) => {};

  return (
    <div className="edit-container">
      <h2>Edit Movie</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {movieData && <MovieForm />}
    </div>
  );
}

export default EditMovie;
