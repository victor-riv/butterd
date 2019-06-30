import React from "react";

import { Filters } from "../components/Filters";
import { MoviesGrid } from "../components/Grid";

export const Collection = () => {
  return (
    <div>
      <Filters />
      <MoviesGrid />
    </div>
  );
};
