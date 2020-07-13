import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const promoMovie = {
  TITLE: `The Dark Knight`,
  GENRE: `Action`,
  DATE: `2008`,
};

const movies = [
  {
    title: `title-1`,
    image: `image-1`
  },
  {
    title: `title-2`,
    image: `image-2`
  },
  {
    title: `title-3`,
    image: `image-3`
  },
  {
    title: `title-4`,
    image: `image-4`
  }];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`should title be pressed`, () => {
    const titleClickHandler = jest.fn();

    const main = mount(
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onTitleClick={titleClickHandler}
        />
    );

    const movieTitles = main.find(`a.small-movie-card__link`);

    movieTitles.forEach((movieTitle) => {
      movieTitle.simulate(`click`);
    });

    expect(titleClickHandler).toHaveBeenCalledTimes(movies.length);
  });
});
