import React from "react";
import { Helmet } from "react-helmet";
import MovieListing from "../components/movie-listing";

function MoviesPage(props) {
  return (
    <main>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <MovieListing {...props} />
    </main>
  );
}

export default MoviesPage;
