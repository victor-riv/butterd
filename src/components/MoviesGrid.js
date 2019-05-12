import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/movies-context";
import { getNowPlaying } from "../services/api-service";
import GridMovie from "./GridMovie";
import "../styles/moviesGrid.css";

const MoviesGrid = () => {
  const { state, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    const movies = await getNowPlaying();
    dispatch({
      type: "FETCH_MOVIES",
      payload: movies
    });
  };

  const renderMovieGrid = movie => <GridMovie key={movie.id} details={movie} />;

  return (
    <div>
      {!state.isLoadingMovies && (
        <div className="movies-grid">{state.movies.map(renderMovieGrid)}</div>
      )}
    </div>
  );
};

export default MoviesGrid;
