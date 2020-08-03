import React, {PureComponent} from 'react';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._setPlayingMovie = this._setPlayingMovie.bind(this);
    }

    _setPlayingMovie(isPlaying) {
      this.setState({
        isPlaying
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          setPlayingMovie={this._setPlayingMovie}
        />
      );
    }
  }

  WithVideo.propTypes = {};

  return WithVideo;
};

export default withVideo;
