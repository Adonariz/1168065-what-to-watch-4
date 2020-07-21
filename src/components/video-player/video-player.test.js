import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from "./video-player.jsx";

const mock = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`VideoPlayerComponent`, () => {
  it(`should VideoPlayerComponent render correctly`, () => {
    const {src, image} = mock;

    const tree = renderer.create(
        <VideoPlayer
          isPlaying={true}
          src={src}
          poster={image}
          muted
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
