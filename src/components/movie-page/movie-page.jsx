import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";
import Tabs from "../tabs/tabs.jsx";
import MoviePageOverview from "../movie-page-overview/movie-page-overview.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";
import MoviePageReviews from "../movie-page-reviews/movie-page-reviews.jsx";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: Tab.OVERVIEW,
    };

    this._setActiveTab = this._setActiveTab.bind(this);
  }

  _setActiveTab(tab) {
    return (
      (evt) => {
        evt.preventDefault();

        this.setState({
          activeTab: tab,
        });
      }
    );
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
        return ``;
    }
  }

  render() {
    const {movie, sortedMovies} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.background} alt={movie.title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.poster} alt={movie.title} width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <Tabs
                    onLinkClick={this._setActiveTab}
                    currentTab={this.state.activeTab}
                  />
                </nav>

                {this._renderActiveTab()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            {sortedMovies}
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
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

export default MoviePage;
