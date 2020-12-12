import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Movie from "./movie";
import useAllMovies from "../hooks/use-all-movies";
import "./movie-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function MovieListing(props) {
  const userId = props.user.uid;
  const [movies, isLoading, errorMessage] = useAllMovies(userId);

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
              <Movie id={movieId} data={movieData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieListing;
