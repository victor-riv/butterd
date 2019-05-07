import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/movies-context";
import MoviesGrid from "./components/MoviesGrid";

import "./App.css";

const App = () => {
  return (
    <MoviesContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
        </Switch>
      </div>
    </MoviesContextProvider>
  );
};

export default App;
