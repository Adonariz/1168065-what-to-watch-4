import React from "react";
import renderer from "react-test-renderer";
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

describe(`GenresList`, () => {
  it(`should GenresList render correctly`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenreFilter={Settings.activeFilter}
            genres={Settings.genres}
            onGenreClick={() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
