import React, { createContext, useReducer } from "react";

const initialState = {
  movies: [],
  isLoadingMovies: true
};

const MoviesContext = createContext();

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        isLoadingMovies: false,
        movies: action.payload
      };
    default:
      return state;
  }
};

const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  const localContext = {
    state,
    dispatch
  };
  return (
    <MoviesContext.Provider value={localContext}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesContextProvider };
