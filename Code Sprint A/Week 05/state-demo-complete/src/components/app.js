import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GamePage from "../pages/game-page";
import NamePage from "../pages/name-page";
import TypePage from "../pages/type-page";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [type, setType] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <NamePage name={playerName} setName={setPlayerName} />
        </Route>
        <Route path="/type">
          <TypePage name={playerName} type={type} setType={setType} />
        </Route>
        <Route path="/game">
          <GamePage name={playerName} type={type} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
