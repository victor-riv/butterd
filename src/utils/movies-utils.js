const fetchMoviesInTheaters = async () => {
  const res = await fetch(`http://localhost:4321/movies/getMoviesInTheaters`);
  const movies = await res.json();
  return movies;
};

const fetchMoviesComingSoon = async () => {
  const res = await fetch(`http://localhost:4321/movies/getMoviesComingSoon`);
  const movies = await res.json();
  return movies;
};

const fetchPopularMovies = async () => {
  const res = await fetch(`http://localhost:4321/movies/getPopularMovies`);
  const movies = await res.json();
  return movies;
};

const fetchMoviesInLocalStorage = () => {
  const localStorageMovies = localStorage.getItem("movies");
  if (!localStorageMovies) return [];
  return JSON.parse(localStorageMovies);
};

export {
  fetchMoviesInTheaters,
  fetchMoviesComingSoon,
  fetchPopularMovies,
  fetchMoviesInLocalStorage
};
