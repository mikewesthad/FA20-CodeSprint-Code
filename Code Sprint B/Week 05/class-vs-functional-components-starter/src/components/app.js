import React from "react";
import ClickButton from "./click-button";
import Timer from "./timer";
import WelcomeMessage from "./welcome-message";

export default function App() {
  return (
    <main>
      <h1>Class Vs Functional Component</h1>
      <WelcomeMessage name="Mike" />
      <ClickButton />
      <Timer />
    </main>
  );
}
