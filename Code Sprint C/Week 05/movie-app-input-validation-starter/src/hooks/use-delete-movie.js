import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useDeleteMovie(userId, movieId) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteMovie = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("movies").doc(movieId);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return [isDeleting, errorMessage, deleteMovie];
}

export default useDeleteMovie;
