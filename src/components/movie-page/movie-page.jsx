import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";

const MoviePage = (props) => {
  const {
    movie,
    sortedMovies,
    activeTab,
    setActiveTab,
    renderActiveTab,
    onPlayButtonClick
  } = props;

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
                <button
                  className="btn btn--play movie-card__button" type="button"
                  onClick={() => onPlayButtonClick({
                    title: movie.title,
                    source: movie.source,
                  })}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
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
                  onLinkClick={setActiveTab}
                  currentTab={activeTab}
                />
              </nav>

              {renderActiveTab()}
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
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  sortedMovies: PropTypes.element.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  renderActiveTab: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default MoviePage;
