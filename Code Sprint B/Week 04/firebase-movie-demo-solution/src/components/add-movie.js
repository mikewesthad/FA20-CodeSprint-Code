import React, { useState } from "react";
import { moviesCollection } from "../data/firebase";
import MovieForm from "./movie-form";
import "./add-movie.css";

function AddMovie() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onMovieSumbit = async (title, rating, releaseYear) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      const ref = await moviesCollection.add({
        title,
        rating,
        releaseYear,
      });
      setFormMessage("Saved successfully!");
      console.log("Document written with ID: ", ref.id);
    } catch (error) {
      setFormMessage("Something went wrong. Please try again.");
      console.error("Error adding document: ", error);
    }
    setIsSaving(false);
  };

  return (
    <div className="add-container">
      <h1>Add Movie</h1>
      <MovieForm isSaving={isSaving} onSubmit={onMovieSumbit} message={formMessage} />
    </div>
  );
}

export default AddMovie;
