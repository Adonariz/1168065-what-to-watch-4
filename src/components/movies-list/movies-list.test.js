import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

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

describe(`MoviesListComponent`, () => {
  it(`should render movies list correctly`, () => {
    const tree = renderer
      .create(
          <MoviesList
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
