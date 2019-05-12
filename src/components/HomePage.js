import React, { useEffect, useContext } from "react";
import { MoviesContext } from "../context/movies-context";
import { getNowPlaying } from "../services/api-service";
import { HomePageCard, FeatureCard } from "./HomePageCard";
import Movie from "./Movie";
import "../styles/HomePage.css";

const HomePage = () => {
  const { state, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    fetchNowPlaying();
  });

  const fetchNowPlaying = async () => {
    const movies = await getNowPlaying();
    dispatch({
      type: "FETCH_MOVIES",
      payload: movies
    });
  };

  const features = [
    {
      name: "Log and Rate Movies",
      description: "This is a description"
    },
    {
      name: "Read Reviews",
      description: "This is a description"
    },
    {
      name: "News",
      description: "This is a description"
    },
    {
      name: "Idk",
      description: "This is a description"
    }
  ];

  const renderFeatureCards = feature => (
    <FeatureCard key={feature.name} feature={feature} />
  );

  const renderPopularMovies = movie => <Movie movie={movie} />;
  return (
    <div className="home-page">
      <div className="home-page-cards">
        <HomePageCard />
        <div className="feature-cards">{features.map(renderFeatureCards)}</div>
      </div>
      <h2>Popular Movies</h2>
      <div className="home-page-movies">
        {state.movies.slice(0, 4).map(renderPopularMovies)}
      </div>
    </div>
  );
};

export default HomePage;
