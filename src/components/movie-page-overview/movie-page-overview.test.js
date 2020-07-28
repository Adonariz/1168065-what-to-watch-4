import React from "react";
import renderer from "react-test-renderer";
import MoviePageOverview from "./movie-page-overview";

const mock = {
  rating: {
    score: `7.9`,
    level: `Good`,
    count: `1234 ratings`
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Anderson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ],
};

describe(`MoviePageOverview`, () => {
  it(`should MoviePageOverview render correctly`, () => {
    const tree = renderer.create(
        <MoviePageOverview
          score={mock.rating.score}
          level={mock.rating.level}
          count={mock.rating.count}
          description={mock.description}
          director={mock.director}
          starring={mock.starring}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
