import React, {Fragment} from "react";
import PropTypes from "prop-types";

const MAX_FILM_STARRING = 4;

const checkFilmStarring = (starring) => {
  if (starring.length > MAX_FILM_STARRING) {
    return `${starring.slice(0, 4).join(`, `)} and other`;
  } else {
    return starring.join(`, `);
  }
};

const MoviePageOverview = (props) => {
  const {
    score,
    level,
    count,
    description,
    director,
    starring,
  } = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{count}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>Starring: {checkFilmStarring(starring)}</strong>
        </p>
      </div>
    </Fragment>
  );
};

MoviePageOverview.propTypes = {
  score: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default MoviePageOverview;
