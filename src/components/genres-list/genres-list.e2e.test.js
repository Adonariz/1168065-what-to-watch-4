import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list.jsx";

const mock = [
  {
    title: `Aviator`,
    image: `img/aviator.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
  },
  {
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Drama`,
  },
  {
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Action`,
  },
];

const Settings = {
  activeFilter: `Action`,
  genres: [`All genres`].concat(Array.from(new Set(mock.map((item) => item.genre)))),
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`GenresList e2e test`, () => {
  it(`should genre be clicked`, () => {
    const onGenreClick = jest.fn();

    const genresList = shallow(
        <GenresList
          activeGenreFilter={Settings.activeFilter}
          genres={Settings.genres}
          onGenreClick={onGenreClick}
        />
    );

    const elements = genresList.find(`.catalog__genres-link`);

    const mockEvent = {
      preventDefault() {}
    };

    elements.forEach((listItem) => listItem.simulate(`click`, mockEvent));

    expect(onGenreClick).toHaveBeenCalledTimes(elements.length);
    expect(onGenreClick.mock.calls[0][0]).toBe(`All genres`);
    expect(onGenreClick.mock.calls[1][0]).toBe(`Drama`);
  });
});
