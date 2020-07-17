import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const movie = {
  title: `The Dark Knight`,
  genre: `Action`,
  year: 2008,
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
  it(`should title be clicked`, () => {
    const onTitleClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movies={movies}
          onTitleClick={onTitleClick}
          onPosterClick={() => {}}
        />
    );

    const movieTitles = main.find(`a.small-movie-card__link`);
    movieTitles.forEach((movieTitle) => movieTitle.simulate(`click`));

    expect(onTitleClick).toHaveBeenCalledTimes(movieTitles.length);
  });

  it(`should poster be clicked`, () => {
    const onPosterClick = jest.fn();

    const main = shallow(
        <Main
          movie={movie}
          movies={movies}
          onTitleClick={() => {}}
          onPosterClick={onPosterClick}
        />
    );

    const moviePosters = main.find(`.small-movie-card`);
    moviePosters.forEach((moviePoster) => moviePoster.simulate(`click`));

    expect(onPosterClick).toHaveBeenCalledTimes(moviePosters.length);
  });
});
