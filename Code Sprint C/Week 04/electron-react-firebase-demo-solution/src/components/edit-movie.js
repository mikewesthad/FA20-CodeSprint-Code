import React from "react";
import useMovie from "../hooks/use-movie";
import useSaveMovie from "../hooks/use-save-movie";
import "./edit-movie.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";

function EditMovie(props) {
  const movieId = props.id;
  const userId = props.user.uid;

  const [movieData, isLoading, errorMessage] = useMovie(userId, movieId);
  const [saveMovie, isSaving, formMessage] = useSaveMovie();

  const onMovieSubmit = async (title, rating, releaseYear) => {
    saveMovie({ title, rating, releaseYear }, userId, movieId);
  };

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
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {movieData && (
        <MovieForm
          initialState={movieData}
          onSubmit={onMovieSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditMovie;
