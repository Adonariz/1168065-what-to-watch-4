import {ALL_GENRES, MAX_MOVIES_LENGTH} from "./const";
import {extend, getGenresList} from "./utils";
import movie from "./mocks/movie";
import movies from "./mocks/movies";

const initialState = {
  genre: ALL_GENRES,
  genresList: getGenresList(movies),
  movie,
  movies,
  shownMoviesCount: MAX_MOVIES_LENGTH,
  moviesByGenre: null,
  isMoreMovies: true,
};

export const ActionType = {
  SET_FILTER_BY_GENRE: `SET_FILTER_BY_GENRE`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
};

export const ActionCreator = {
  setCurrentGenre: (genre) => {
    const sortedMovies = genre === ALL_GENRES ? movies : movies.filter((currentMovie) => currentMovie.genre === genre);

    return {
      type: ActionType.SET_FILTER_BY_GENRE,
      genre,
      movies: sortedMovies,
      moviesByGenre: sortedMovies,
    };
  },
  setMoviesByShowMoreButton: () => {
    return {
      type: ActionType.SHOW_MORE_MOVIES,
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.genre,
        movies: action.movies,
        moviesByGenre: action.moviesByGenre,
        isMoreMovies: action.movies.length > MAX_MOVIES_LENGTH,
        shownMoviesCount: MAX_MOVIES_LENGTH,
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        shownMoviesCount: state.shownMoviesCount + MAX_MOVIES_LENGTH,
        isMoreMovies: (state.movies.length - state.shownMoviesCount) > 0,
      });
    default:
      return state;
  }
};
