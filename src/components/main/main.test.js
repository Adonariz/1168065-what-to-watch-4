import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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
  },
  {
    title: `title-2`,
    image: `image-2`,
    src: `https`,
  },
  {
    title: `title-3`,
    image: `image-3`,
    src: `https`,
  },
  {
    title: `title-4`,
    image: `image-4`,
    src: `https`,
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
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
