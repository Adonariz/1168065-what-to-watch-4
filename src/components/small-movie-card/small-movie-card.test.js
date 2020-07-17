import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  image: `img/the-grand-budapest-hotel-poster.jpg`,
};

describe(`SmallMovieCardComponent`, () => {
  it(`should render SmallMovieCard correctly`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            onTitleClick={() => {}}
            onPosterClick={() => {}}
            onCardHover={() => {}}
            movie={movie}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
