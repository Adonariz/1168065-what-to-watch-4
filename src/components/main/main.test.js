import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Movie, MOVIE_TITLES} from "../../index";

it(`should render Main correctly `, () => {
  const tree = renderer
    .create(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={MOVIE_TITLES}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
