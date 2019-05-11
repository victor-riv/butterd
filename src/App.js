import React from "react";
import { Switch, Route } from "react-router-dom";
import { MoviesContextProvider } from "./context/movies-context";
import MoviesGrid from "./components/MoviesGrid";
import NavBar from './components/NavBar';


import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
        </Switch>
      </MoviesContextProvider>
    </div >
  );
};

export default App;
