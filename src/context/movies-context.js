import React, { createContext, useReducer } from "react";

const initialState = {
  movies: [],
  category: "IN THEATERS",
  isLoadingMovies: true
};

const MoviesContext = createContext();

const moviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_IN_THEATERS":
    case "FETCH_LOCAL_STORAGE_MOVIES":
    case "FETCH_COMING_SOON":
      return {
        ...state,
        isLoadingMovies: false,
        movies: action.payload
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        isLoadingMovies: true,
        category: action.payload
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
