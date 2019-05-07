import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/movies-context";
import MoviesGrid from "./components/MoviesGrid";
import SideBar from "./components/SideBar";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <MoviesContextProvider>
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
        </Switch>
      </MoviesContextProvider>
    </div>
  );
};

export default App;
