import React from "react";
import renderer from "react-test-renderer";
import MoviePageReview from "./movie-page-review";

const mock = {
  id: `0`,
  author: `Kate Muir`,
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  date: `December 24, 2016`,
  rating: `8,9`,
};

describe(`MoviePageReview`, () => {
  it(`should MoviePageReview render correctly`, () => {
    const tree = renderer.create(
        <MoviePageReview review={mock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
