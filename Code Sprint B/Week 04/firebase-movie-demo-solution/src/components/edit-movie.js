import React, { useEffect, useState } from "react";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";
import { moviesCollection } from "../data/firebase";
import "./edit-movie.css";

function EditMovie(props) {
  const { id } = props;
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    async function getMovie() {
      setIsLoading(true);

      try {
        const movieSnapshot = await moviesCollection.doc(id).get();

        if (!movieSnapshot.exists) {
          throw new Error("No such movie exists!");
        }

        const data = movieSnapshot.data();
        setMovieData(data);
      } catch (error) {
        console.error(error);
        setErrorMessage(error);
      }

      setIsLoading(false);
    }

    getMovie();
  }, [id]);

  const onMovieSubmit = async (title, rating, releaseYear) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      await moviesCollection.doc(id).set({
        title,
        rating,
        releaseYear,
      });
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again.");
    }
    setIsSaving(false);
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {movieData && (
        <MovieForm
          initialState={movieData}
          isSaving={isSaving}
          onSubmit={onMovieSubmit}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditMovie;
