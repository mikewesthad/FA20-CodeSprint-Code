import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
  return (
    <main>
      <Helmet>
        <title>Not Found!</title>
      </Helmet>
      <p>No such page exists!</p>
    </main>
  );
}

export default NotFoundPage;
