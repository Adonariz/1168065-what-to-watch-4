import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  image: `movie-image`,
};

describe(`SmallMovieCardComponent`, () => {
  it(`should render movie card correctly`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            onTitleClick={() => {}}
            onCardHover={() => {}}
            movie={movie}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
