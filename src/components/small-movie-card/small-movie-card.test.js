import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  image: `img/the-grand-budapest-hotel-poster.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`SmallMovieCardComponent`, () => {
  it(`should render SmallMovieCard correctly`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            onTitleClick={() => {}}
            onPosterClick={() => {}}
            isPlaying={false}
            setPlayingMovie={() => {}}
            movie={movie}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
