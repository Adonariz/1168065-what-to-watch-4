import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {getGenresList} from "../../utils";
import {MAX_MOVIES_LENGTH} from "../../const";

const movie = {
  title: `The Dark Knight`,
  genre: `Action`,
  year: 2008,
  source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const movies = [
  {
    title: `title`,
    image: `image`,
    genre: `Action`,
    src: `https`,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  FILM_GENRE: `Action`,
  ACTIVE_GENRE_FILTER: `Action`,
  GENRES_LIST: getGenresList(movies),
  IS_MORE_MOVIES: true,
  SHOWN_MOVIES_COUNT: MAX_MOVIES_LENGTH,
};

const PlayerSettings = {
  title: movie.title,
  source: movie.source,
};

const setMoviesList = (array) => {
  for (let i = 0; array.length < 10; i++) {
    array.push(array[0]);
  }

  return array;
};

describe(`MainComponent`, () => {
  it(`should title be clicked`, () => {
    const onTitleClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movies={setMoviesList(movies)}
          genres={Settings.GENRES_LIST}
          activeGenreFilter={Settings.ACTIVE_GENRE_FILTER}
          onTitleClick={onTitleClick}
          onPosterClick={() => {}}
          onGenreClick={() => {}}
          onShowMoreButtonClick={() => {}}
          onPlayButtonClick={() => {}}
          isMoreMovies={Settings.IS_MORE_MOVIES}
          shownMoviesCount={Settings.SHOWN_MOVIES_COUNT}
        />
    );

    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(onTitleClick).toHaveBeenCalledTimes(movieTitles.length);
  });

  it(`should poster be clicked`, () => {
    const onPosterClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movies={movies}
          genres={Settings.GENRES_LIST}
          activeGenreFilter={Settings.ACTIVE_GENRE_FILTER}
          onTitleClick={() => {}}
          onPosterClick={onPosterClick}
          onGenreClick={() => {}}
          onShowMoreButtonClick={() => {}}
          onPlayButtonClick={() => {}}
          isMoreMovies={Settings.IS_MORE_MOVIES}
          shownMoviesCount={Settings.SHOWN_MOVIES_COUNT}
        />
    );

    const moviePosters = main.find(`.small-movie-card`);
    moviePosters.forEach((moviePoster) => moviePoster.simulate(`click`));

    expect(onPosterClick).toHaveBeenCalledTimes(moviePosters.length);
  });

  it(`should show more button be clicked`, () => {
    const onShowMoreButtonClick = jest.fn();

    const main = mount(
        <Main
          movie={movie}
          movies={movies}
          genres={Settings.GENRES_LIST}
          activeGenreFilter={Settings.ACTIVE_GENRE_FILTER}
          onTitleClick={() => {}}
          onPosterClick={() => {}}
          onGenreClick={() => {}}
          onShowMoreButtonClick={onShowMoreButtonClick}
          onPlayButtonClick={() => {}}
          isMoreMovies={Settings.IS_MORE_MOVIES}
          shownMoviesCount={Settings.SHOWN_MOVIES_COUNT}
        />
    );

    const showMoreButton = main.find(`.catalog__button`);

    showMoreButton.simulate(`click`);
    expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`should play button be clicked`, () => {
    const onPlayButtonClick = jest.fn();

    const main = mount(
        <Main
          movie={movie}
          movies={movies}
          genres={Settings.GENRES_LIST}
          activeGenreFilter={Settings.ACTIVE_GENRE_FILTER}
          onTitleClick={() => {}}
          onPosterClick={() => {}}
          onGenreClick={() => {}}
          onShowMoreButtonClick={() => {}}
          onPlayButtonClick={onPlayButtonClick}
          isMoreMovies={Settings.IS_MORE_MOVIES}
          shownMoviesCount={Settings.SHOWN_MOVIES_COUNT}
        />
    );

    const playButton = main.find(`.btn--play`);

    playButton.simulate(`click`);
    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(onPlayButtonClick).toHaveBeenCalledWith(PlayerSettings);
  });
});
