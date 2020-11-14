import React, { useState, useEffect } from "react";
import { moviesCollection } from "../data/firebase";
import "./edit-movie.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import MovieForm from "./movie-form";

function EditMovie(props) {
  const { id } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movieData, setMovieData] = useState(null);
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
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }
      setIsLoading(false);
    }

    getMovie();
  }, [id]);

  const onMovieSubmit = async (title, rating, releaseYear) => {
    // alert(`${title} ${rating} ${releaseYear}`);

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
      setFormMessage("Something went wrong editing this movie. Please try again.");
      console.error(error);
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
