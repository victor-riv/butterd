import React from "react";
import { Switch, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/movies-context";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MoviesContextProvider>
    </div>
  );
};

export default App;
