import React from "react";
import useMovie from "../hooks/use-movie";
import useSaveMovie from "../hooks/use-save-movie";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";
import "./edit-movie.css";

function EditMovie(props) {
  const { id } = props;

  const [movieData, isLoading, errorMessage] = useMovie(id);
  const [save, isSaving, formMessage] = useSaveMovie();

  const onMovieSubmit = async (title, rating, releaseYear) => {
    save({ title, rating, releaseYear }, id);
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
