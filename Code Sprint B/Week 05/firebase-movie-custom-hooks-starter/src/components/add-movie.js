import React, { useState } from "react";
import { moviesCollection } from "../data/firebase";
import "./add-movie.css";
import MovieForm from "./movie-form";

function AddMovie() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onMovieSumbit = async (title, rating, releaseYear) => {
    // alert(`You want to add: ${title}, ${rating}, ${releaseYear}.`);

    setIsSaving(true);
    setFormMessage("");

    try {
      await moviesCollection.add({
        title,
        rating,
        releaseYear,
      });
      setFormMessage("Saved successfully!");
      console.log("Saved!");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again!");
      console.error(error);
    }

    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Movie</h1>
      <MovieForm onSubmit={onMovieSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddMovie;
