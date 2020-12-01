import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveMovie() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (movieData, userId, movieId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (movieId === undefined) {
        await usersCollection.doc(userId).collection("movies").add(movieData);
      } else {
        await usersCollection.doc(userId).collection("movies").doc(movieId).set(movieData);
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
