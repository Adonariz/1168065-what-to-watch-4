import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview";

const sortedMoviesMock = () => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}>
      <div className="small-movie-card__image">
        <video/>
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Rock film poster" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={() => {}} className="small-movie-card__link" href="#">The Rock</a>
      </h3>
    </article>
  );
};

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy-drama`,
  year: 2014,
  time: `100m`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  source: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
    `Willem Dafoe`
  ],
  reviews: [
    {
      id: `0`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      rating: `8,9`,
    },
    {
      id: `1`,
      author: `Bill Goodykoontz`,
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      date: `November 18, 2015`,
      rating: `8,0`,
    },
    {
      id: `2`,
      author: `Amanda Greever`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      date: `November 18, 2015`,
      rating: `8,0`,
    },
  ]
};

const renderActiveTab = () => {
  return (
    <MoviePageOverview
      score={movie.rating.score}
      level={movie.rating.level}
      count={movie.rating.count}
      description={movie.description}
      director={movie.director}
      starring={movie.starring}
    />
  );
};

describe(`MoviePageComponent`, () => {
  it(`Should FilmPageComponent render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movie}
            sortedMovies={sortedMoviesMock()}
            activeTab={`overview`}
            renderActiveTab={renderActiveTab}
            setActiveTab={() => {}}
            onPlayButtonClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
