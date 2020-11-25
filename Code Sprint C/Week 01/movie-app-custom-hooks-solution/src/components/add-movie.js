import React from "react";
import useSaveMovie from "../hooks/use-save-movie";
import MovieForm from "./movie-form";
import "./add-movie.css";

function AddMovie() {
  const [save, isSaving, formMessage] = useSaveMovie();

  const onMovieSumbit = async (title, rating, releaseYear) => {
    save({ title, rating, releaseYear });
  };

  return (
    <div className="add-container">
      <h1>Add Movie</h1>
      <MovieForm onSubmit={onMovieSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddMovie;
