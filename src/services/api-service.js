export const getNowPlaying = async () => {
  const res = await fetch(
    `${process.env.REACT_APP_TMDB_URL}api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }`
  );
  const { results } = await res.json();
  return results;
};
