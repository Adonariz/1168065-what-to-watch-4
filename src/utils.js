import {ALL_GENRES} from "./const";

export const formatReviewDate = (dateString) => {
  const date = new Date(dateString);
  date.setUTCDate(date.getDate());

  return date.toISOString().slice(0, 10);
};

export const extend = (a, b) => Object.assign({}, a, b);

export const getGenresList = (movies) => {
  return [ALL_GENRES].concat(Array.from(new Set(movies.map((movie) => movie.genre))));
};
