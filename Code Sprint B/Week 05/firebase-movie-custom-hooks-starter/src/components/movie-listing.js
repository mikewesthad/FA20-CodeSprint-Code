import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { moviesCollection } from "../data/firebase";
import Movie from "./movie";
import "./movie-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect allows us to run side-effects after rendering.
  // Passing in an empty array for the 2nd parameter allows us to run the effect conditionally and
  // only when the component mounts to the page.
  useEffect(() => {
    // Method 1 of reading the database - read only once:
    // async function getAllMovies() {
    //   setIsLoading(true);
    //   try {
    //     const snapshot = await moviesCollection.get();
    //     const docs = snapshot.docs;
    //     // This is so that we can test our error flow:
    //     // throw new Error("Something has gone wrong!");
    //     setMovies(docs);
    //   } catch (error) {
    //     setErrorMessage("There was a problem loading your movie ratings. Please try again.");
    //     console.error(error);
    //   }
    //   setIsLoading(false);
    // }
    // getAllMovies();

    // Method 2 of reading the database - listening for realtime updates:
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setMovies(docs);
    };
    const onError = (error) => {
      setErrorMessage("There was a problem loading your movie ratings. Please try again.");
      console.error(error);
    };
    const unsubscribe = moviesCollection.orderBy("rating", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="movies-container">
      <h1>Movies</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="movie-list">
        {movies.map((movieDoc) => {
          const movieId = movieDoc.id;
          const movieData = movieDoc.data();
          return (
            <li key={movieId}>
              <Movie id={movieId} data={movieData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieListing;
