import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Movie, MOVIE_TITLES} from "../../index";

it(`should render App`, () => {
  const tree = renderer
    .create(
        <App
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={MOVIE_TITLES}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
