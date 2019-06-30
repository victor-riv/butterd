import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { MoviesContext } from "../context/movies-context";

import {
  fetchMoviesInTheaters,
  fetchMoviesComingSoon,
  fetchMoviesInLocalStorage
} from "../utils/movies-utils";

import { Movie } from "./Movie";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "50px"
  }
}));

const renderMovie = movie => {
  return (
    <Grid item xs={4} key={movie.id}>
      <Movie details={movie} />
    </Grid>
  );
};

const renderNullState = () => {
  return (
    <Grid item xs={12}>
      <Typography align="center" gutterBottom variant="h6" component="h2">
        Add A Movie To Your Collection
      </Typography>
    </Grid>
  );
};

const MoviesGrid = () => {
  const { state, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    handleCategoryChange();
  }, [state.category]);

  const handleCategoryChange = async () => {
    switch (state.category) {
      case "IN THEATERS": {
        const movies = await fetchMoviesInTheaters();
        dispatch({
          type: "FETCH_IN_THEATERS",
          payload: movies
        });
        break;
      }
      case "COMING SOON": {
        const movies = await fetchMoviesComingSoon();
        dispatch({
          type: "FETCH_COMING_SOON",
          payload: movies
        });
        break;
      }
      case "COLLECTION": {
        const movies = await fetchMoviesInLocalStorage();
        dispatch({
          type: "FETCH_LOCAL_STORAGE_MOVIES",
          payload: movies
        });
        break;
      }
      default: {
        console.log("in default");
      }
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {state.movies.length > 0
          ? state.movies.map(renderMovie)
          : renderNullState()}
      </Grid>
    </div>
  );
};

export { MoviesGrid };
