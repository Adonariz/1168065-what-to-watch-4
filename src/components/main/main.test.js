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

describe(`MainComponent`, () => {
  it(`should render Main correctly `, () => {
    const tree = renderer
      .create(
          <Main
            movie={movie}
            movies={movies}
            genres={[`All genres`].concat(Array.from(new Set(movies.map((item) => item.genre))))}
            activeGenreFilter={`Comedy`}
            onTitleClick={() => {}}
            onPosterClick={() => {}}
            onGenreClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
