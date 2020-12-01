import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllMovies(userId) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setMovies(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your movie ratings. Please try again.");
      console.error(error);
    };

    const unsubscribe = usersCollection
      .doc(userId)
      .collection("movies")
      .orderBy("rating", "desc")
      .onSnapshot(onNext, onError);

    return unsubscribe;
  }, []);

  return [movies, isLoading, errorMessage];
}

export default useAllMovies;
