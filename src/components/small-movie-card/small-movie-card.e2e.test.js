import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `The Grand Budapest Hotel`,
  image: `img/the-grand-budapest-hotel-poster.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCardComponent e2e test`, () => {
  it(`Should card title be pressed`, () => {
    const onTitleClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onTitleClick={onTitleClick}
          onPosterClick={() => {}}
          isPlaying={false}
          setPlayingMovie={() => {}}
        />
    );

    const movieTitle = smallMovieCard.find(`.small-movie-card__link`);

    const mockEvent = {
      preventDefault() {}
    };

    movieTitle.simulate(`click`, mockEvent);

    expect(onTitleClick.mock.calls.length).toBe(1);
    expect(onTitleClick).toHaveBeenCalledWith(movie);
  });

  it(`Should card poster click`, () => {
    const onPosterClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onTitleClick={() => {}}
          onPosterClick={onPosterClick}
          isPlaying={false}
          setPlayingMovie={() => {}}
        />
    );

    const card = smallMovieCard.find(`.small-movie-card`);
    card.simulate(`click`);

    expect(onPosterClick).toHaveBeenCalledTimes(1);
    expect(onPosterClick).toHaveBeenCalledWith(movie);
  });
});
