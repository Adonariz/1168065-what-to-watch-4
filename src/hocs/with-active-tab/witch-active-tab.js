import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Tab} from "../../const";
import MoviePageOverview from "../../components/movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../../components/movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../../components/movie-page-reviews/movie-page-reviews.jsx";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: Tab.OVERVIEW
      };

      this._setActiveTab = this._setActiveTab.bind(this);
      this._renderActiveTab = this._renderActiveTab.bind(this);
    }

    _setActiveTab(tab) {
      return (evt) => {
        evt.preventDefault();

        this.setState({
          activeTab: tab
        });
      };
    }

    _renderActiveTab() {
      switch (this.state.activeTab) {
        case Tab.OVERVIEW:
          return (
            <MoviePageOverview
              score={this.props.movie.rating.score}
              level={this.props.movie.rating.level}
              count={this.props.movie.rating.count}
              description={this.props.movie.description}
              director={this.props.movie.director}
              starring={this.props.movie.starring}
            />
          );
        case Tab.DETAILS:
          return (
            <MoviePageDetails
              genre={this.props.movie.genre}
              year={this.props.movie.year}
              director={this.props.movie.director}
              starring={this.props.movie.starring}
              time={this.props.movie.time}
            />
          );
        case Tab.REVIEWS:
          return (
            <MoviePageReviews reviews={this.props.movie.reviews}/>
          );
        default:
          return null;
      }
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component
          {...this.props}
          activeTab={activeTab}
          setActiveTab={this._setActiveTab}
          renderActiveTab={this._renderActiveTab}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        score: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(
          PropTypes.string.isRequired
      ).isRequired,
      reviews: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            rating: PropTypes.string.isRequired,
          }).isRequired
      )}).isRequired,
    sortedMovies: PropTypes.element.isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
