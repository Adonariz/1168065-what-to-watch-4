import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {getGenresList} from "../../utils";
import {MAX_MOVIES_LENGTH} from "../../const";

const movie = {
  title: `The Dark Knight`,
  genre: `Action`,
  year: 2008,
};

const movies = [
  {
    title: `title-1`,
    image: `image-1`,
    src: `https`,
    genre: `Comedy`,
  },
  {
    title: `title-2`,
    image: `image-2`,
    src: `https`,
    genre: `Crime`,
  },
  {
    title: `title-3`,
    image: `image-3`,
    src: `https`,
    genre: `Documentary`,
  },
  {
    title: `title-4`,
    image: `image-4`,
    src: `https`,
    genre: `Drama`,
  }
];

const Settings = {
  GENRES_LIST: getGenresList(movies),
  IS_MORE_MOVIES: true,
  SHOWN_MOVIES_COUNT: MAX_MOVIES_LENGTH,
};

describe(`MainComponent`, () => {
  it(`should render Main correctly `, () => {
    const tree = renderer
      .create(
          <Main
            movie={movie}
            movies={movies}
            genres={Settings.GENRES_LIST}
            activeGenreFilter={`Comedy`}
            onTitleClick={() => {}}
            onPosterClick={() => {}}
            onGenreClick={() => {}}
            onShowMoreButtonClick={() => {}}
            isMoreMovies={Settings.IS_MORE_MOVIES}
            shownMoviesCount={Settings.SHOWN_MOVIES_COUNT}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
