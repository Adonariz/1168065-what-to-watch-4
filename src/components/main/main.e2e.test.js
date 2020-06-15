import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {Movie, MOVIE_TITLES} from "../mocks/const";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`should title be pressed`, () => {
    const onMovieTitleClick = jest.fn();

    const main = shallow(
        <Main
          title={Movie.TITLE}
          genre={Movie.GENRE}
          year={Movie.YEAR}
          movies={MOVIE_TITLES}
          onMovieTitleClick={onMovieTitleClick}
        />
    );

    const movieTitles = main.find(`a.small-movie-card__link`);

    movieTitles.forEach((movieTitle) => {
      movieTitle.simulate(`click`);
    });

    expect(onMovieTitleClick).toHaveBeenCalledTimes(movieTitles.length);
  });
});
