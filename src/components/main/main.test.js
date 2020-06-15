import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Movie, MOVIE_TITLES} from "../mocks/const";

describe(`MainComponent`, () => {
  it(`should render Main correctly `, () => {
    const tree = renderer
      .create(
          <Main
            title={Movie.TITLE}
            genre={Movie.GENRE}
            year={Movie.YEAR}
            movies={MOVIE_TITLES}
            onMovieTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
