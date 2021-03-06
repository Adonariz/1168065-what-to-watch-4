import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {formatReviewDate} from "../../utils";

const MoviePageReview = (props) => {
  const {review} = props;

  return (
    <Fragment>
      <div className="review" key={review.id}>
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>
          <footer className="review__details">
            <cite className="review__author">{review.author}</cite>
            <time className="review__date" dateTime={formatReviewDate(review.date)}>{review.date}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    </Fragment>
  );
};

MoviePageReview.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired
};

export default MoviePageReview;
