import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Movie = ({ details }) => {
  useEffect(() => {
    console.log(details);
  }, []);

  const backdrop = `http://image.tmdb.org/t/p/w300/${details.backdrop_path}`;
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div
      className="movie"
      style={{
        background: `linear-gradient(rgba(95, 44, 130, 0.5), rgba(73, 160, 157, 0.5)), url(${backdrop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <animated.h3 style={props}>{details.title}</animated.h3>
    </div>
  );
};

export default Movie;
