import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { MoviesContextProvider } from "./context/movies-context";

import { NavBar } from "./components/NavBar";
import { Collection } from "./pages/Collection";

const App = () => {
  return (
    <MoviesContextProvider>
      <div className="App">
        <NavBar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={Collection} />
          </Switch>
        </Container>
      </div>
    </MoviesContextProvider>
  );
};

export default App;
