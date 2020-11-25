import { useState } from "react";
import { moviesCollection } from "../data/firebase";

function useSaveMovie() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (movieData, movieId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (movieId === undefined) {
        await moviesCollection.add(movieData);
      } else {
        await moviesCollection.doc(movieId).set(movieData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing this movie. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveMovie;
