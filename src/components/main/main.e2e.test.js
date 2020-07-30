import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const movie = {
  title: `The Dark Knight`,
  genre: `Action`,
  year: 2008,
};

const movies = [
  {
    title: `title-1`,
    image: `image-1`,
    genre: `Action`,
  },
  {
    title: `title-2`,
    image: `image-2`,
    genre: `Action`,
  },
  {
    title: `title-3`,
    image: `image-3`,
    genre: `Drama`,
  },
  {
    title: `title-4`,
    image: `image-4`,
    genre: `Comedy`,
  }];

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  FILM_GENRE: `Action`,
  ACTIVE_GENRE_FILTER: `Action`,
  GENRES_LIST: [`All genres`].concat(Array.from(new Set(movies.map((item) => item.genre)))),
};

describe(`MainComponent`, () => {
  it(`should title be clicked`, () => {
    const onTitleClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movies={movies}
          genres={Settings.GENRES_LIST}
          activeGenreFilter={Settings.ACTIVE_GENRE_FILTER}
          onTitleClick={onTitleClick}
          onPosterClick={() => {}}
          onGenreClick={() => {}}
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
        />
    );

    const moviePosters = main.find(`.small-movie-card`);
    moviePosters.forEach((moviePoster) => moviePoster.simulate(`click`));

    expect(onPosterClick).toHaveBeenCalledTimes(moviePosters.length);
  });
});
