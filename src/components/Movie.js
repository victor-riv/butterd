import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt="movie"
      />
      <p>{movie.title}</p>
    </div>
  );
};

export default Movie;
