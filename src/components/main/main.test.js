import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movie = {
  title: `The Dark Knight`,
  genre: `Action`,
  date: 2008,
};

const movies = [
  {
    title: `title-1`,
    image: `image-1`
  },
  {
    title: `title-2`,
    image: `image-2`
  },
  {
    title: `title-3`,
    image: `image-3`
  },
  {
    title: `title-4`,
    image: `image-4`
  }
];

describe(`MainComponent`, () => {
  it(`should render Main correctly `, () => {
    const tree = renderer
      .create(
          <Main
            movie={movie}
            movies={movies}
            onTitleClick={() => {}}
            onPosterClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
