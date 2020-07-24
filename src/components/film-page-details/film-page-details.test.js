import React from "react";
import renderer from "react-test-renderer";
import FilmPageDetails from "./film-page-details";

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

describe(`FilmPageDetails`, () => {
  it(`should FilmPageDetails render correctly`, () => {
    const tree = renderer.create(
        <FilmPageDetails
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
