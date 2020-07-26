import React from "react";
import renderer from "react-test-renderer";
import MoviePageDetails from "./movie-page-details";

const mock = {
  genre: `Comedy-drama`,
  year: 2014,
  time: `100m`,
  director: `Wes Anderson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ],
};

describe(`MoviePageDetails`, () => {
  it(`should MoviePageDetails render correctly`, () => {
    const tree = renderer.create(
        <MoviePageDetails
          genre={mock.genre}
          year={mock.year}
          director={mock.director}
          starring={mock.starring}
          time={mock.time}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
