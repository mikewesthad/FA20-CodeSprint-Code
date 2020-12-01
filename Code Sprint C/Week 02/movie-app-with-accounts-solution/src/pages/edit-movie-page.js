import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditMovie from "../components/edit-movie";

function EditMoviePage(props) {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditMovie id={id} {...props} />
    </main>
  );
}

export default EditMoviePage;
