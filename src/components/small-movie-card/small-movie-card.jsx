import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {
      movie,
      onTitleClick,
      onCardHover,
      onPosterClick
    } = this.props;

    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={() => onPosterClick(movie)}
        onMouseEnter={() => {
          onCardHover(movie);
          this.setState({
            isPlaying: true,
          });
        }}
        onMouseLeave={() => {
          onCardHover({});
          this.setState({
            isPlaying: false,
          });
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer isPlaying={isPlaying} src={movie.src} poster={movie.image} />
          <img src={movie.image} alt={movie.title} width="280" height="175" />
        </div>
        <h3
          className="small-movie-card__title"
        >
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onTitleClick(movie);
            }}
            className="small-movie-card__link"
            href="movie-page.html"
          >
            {movie.title}
          </a>
        </h3>
      </article>);
  }
}

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
