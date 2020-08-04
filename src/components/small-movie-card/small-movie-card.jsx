import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const SmallMovieCard = (props) => {
  const {
    movie,
    onTitleClick,
    onPosterClick,
    isPlaying,
    setPlayingMovie,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onPosterClick(Object.assign({id: 1}, movie))}
      onMouseEnter={() => setPlayingMovie(true)}
      onMouseLeave={() => setPlayingMovie(false)}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isPlaying}
          src={movie.src}
          poster={movie.image}
          muted
        />
        <img src={movie.image} alt={movie.title} width="280" height="175" />
      </div>
      <h3
        className="small-movie-card__title"
      >
        <a
          onClick={(evt) => {
            evt.preventDefault();
            onTitleClick(Object.assign({id: 1}, movie));
          }}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {movie.title}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setPlayingMovie: PropTypes.func.isRequired,
};

export default SmallMovieCard;
