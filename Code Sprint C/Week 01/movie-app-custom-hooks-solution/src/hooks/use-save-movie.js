import { useState } from "react";
import { moviesCollection } from "../data/firebase";

function useSaveMovie() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (movieData, id) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (id === undefined) {
        await moviesCollection.add(movieData);
      } else {
        await moviesCollection.doc(id).set(movieData);
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
