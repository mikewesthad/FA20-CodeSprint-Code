import React from "react";
import { Helmet } from "react-helmet";
import AddMovie from "../components/add-movie";

function AddMoviePage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddMovie />
    </main>
  );
}

export default AddMoviePage;
