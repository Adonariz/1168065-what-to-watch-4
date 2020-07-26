import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy-drama`,
  year: 2014,
  time: `100m`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: {
    score: `7.9`,
    level: `Good`,
    count: `1234 ratings`
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Director: Wes Anderson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Tom Cruz`
  ],
  reviews: [
    {
      id: `0`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      rating: `8,9`,
    }
  ],
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

describe(`AppComponent`, () => {
  it(`should render App`, () => {
    const tree = renderer
      .create(
          <App
            movie={movie}
            movies={movies}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
