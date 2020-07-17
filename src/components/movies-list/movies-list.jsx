import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {},
    };
  }

  render() {
    const {movies, onTitleClick, onPosterClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => {
          return (
            <SmallMovieCard
              key={movie.title + index}
              movie={movie}
              onTitleClick={onTitleClick}
              onPosterClick={onPosterClick}
              onCardHover={(currentMovie) => {
                this.setState({
                  activeCard: currentMovie,
                });
              }}
            />
          );
        })}
      </div>
    );
  }
}

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
