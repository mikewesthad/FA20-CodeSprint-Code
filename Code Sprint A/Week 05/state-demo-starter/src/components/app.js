import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "../pages/game-page";
import NamePage from "../pages/name-page";
import TypePage from "../pages/type-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <NamePage />
        </Route>
        <Route path="/type">
          <TypePage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
