import React, { useState } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import "./movie-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function MovieListing() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      <ul className="movie-list">Movies go here!</ul>
    </div>
  );
}

export default MovieListing;
