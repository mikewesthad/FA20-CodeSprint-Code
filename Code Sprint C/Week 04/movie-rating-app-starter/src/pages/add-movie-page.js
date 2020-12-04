import React from "react";
import { Helmet } from "react-helmet";
import AddMovie from "../components/add-movie";

function AddMoviePage(props) {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddMovie {...props} />
    </main>
  );
}

export default AddMoviePage;
