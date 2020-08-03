import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withVideo from "../../hocs/with-video/with-video";

const SmallMovieCardWrapped = withVideo(SmallMovieCard);

const MoviesList = (props) => {
  const {
    movies,
    onTitleClick,
    onPosterClick,
  } = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => {
        return (
          <SmallMovieCardWrapped
            key={movie.title + index}
            movie={movie}
            onTitleClick={onTitleClick}
            onPosterClick={onPosterClick}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired,
};

export default MoviesList;
