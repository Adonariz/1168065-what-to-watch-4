import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`VideoPlayer e2e tests`, () => {
  it(`Start and pause work correctly`, () => {
    const isPlaying = false;
    const isMuted = true;

    const videoPlayer = mount(
        <VideoPlayer
          isPlaying={isPlaying}
          src={mock.src}
          poster={mock.image}
          muted={isMuted}
        />
    );

    expect(videoPlayer.props().isPlaying).toEqual(false);

    videoPlayer.setProps({isPlaying: true});
    expect(videoPlayer.props().isPlaying).toEqual(true);
  });
});
