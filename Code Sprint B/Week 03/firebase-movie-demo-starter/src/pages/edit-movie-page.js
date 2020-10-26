import React from "react";
import { Helmet } from "react-helmet";
import EditMovie from "../components/edit-movie";

function EditMoviePage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditMovie />
    </main>
  );
}

export default EditMoviePage;
