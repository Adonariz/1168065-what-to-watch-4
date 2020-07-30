import {ALL_GENRES} from "./const";
import {extend, getGenresList} from "./utils";
import movie from "./components/mocks/movie";
import movies from "./components/mocks/movies";

const initialState = {
  genre: ALL_GENRES,
  genreList: getGenresList(movies),
  movie,
  movies,
};

export const ActionType = {
  SET_FILTER_BY_GENRE: `SET_FILTER_BY_GENRE`,
};

export const ActionCreator = {
  setCurrentGenre: (genre) => {
    const sortedMovies = genre === ALL_GENRES ? movies : movies.filter((currentMovie) => currentMovie.genre === genre);

    return {
      type: ActionType.SET_FILTER_BY_GENRE,
      genre,
      movies: sortedMovies,
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.genre,
        movies: action.movies,
      });
    default:
      return state;
  }
};
