import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActiveTab from "../../hocs/with-active-tab/witch-active-tab";
import withVideo from "../../hocs/with-video/with-video";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";

const MoviePageWrapped = withActiveTab(MoviePage);
const SmallMovieCardWrapped = withVideo(SmallMovieCard);

class App extends PureComponent {
  constructor() {
    super();

    this._onTitleClickHandler = this._onTitleClickHandler.bind(this);
    this._onPlayButtonClickHandler = this._onPlayButtonClickHandler.bind(this);

    this.state = {
      activePage: {id: 0},
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _getMoviesByGenre(genre) {
    const {movies} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.filter((movie) => movie.genre === genre).map((movie) => {
          return (
            <SmallMovieCardWrapped
              key={movie.title}
              movie={movie}
              onPosterClick={this._onTitleClickHandler}
              onTitleClick={this._onTitleClickHandler}
            />);
        })}
      </div>
    );
  }

  _onTitleClickHandler(movie) {
    this.setState({
      activePage: movie,
    });
  }

  _onButtonClickHandler(movieForPlayer) {
    this.setState({
      activePage: movieForPlayer,
    });
  }

  _renderApp() {
    const {activePage} = this.state;

    if (activePage.id === 1) {
      return this._renderMoviePage();
    } else if (activePage.id === 2) {
      return this._renderFullVideoPlayer();
    } else {
      return this._renderMain();
    }
  }

  _renderMain() {
    const {
      movie,
      movies,
      genresList,
      onGenreClick,
      onShowMoreButtonClick,
      activeGenreFilter,
      isMoreMovies,
      shownMoviesCount,
    } = this.props;

    return (
      <Main
        movie={movie}
        movies={movies}
        genres={genresList}
        onTitleClick={this._onTitleClickHandler}
        onPosterClick={this._onTitleClickHandler}
        onGenreClick={onGenreClick}
        onShowMoreButtonClick={onShowMoreButtonClick}
        activeGenreFilter={activeGenreFilter}
        isMoreMovies={isMoreMovies}
        shownMoviesCount={shownMoviesCount}
      />
    );
  }

  _renderMoviePage() {
    const {movie} = this.props;

    return (
      <MoviePageWrapped
        movie={movie}
        sortedMovies={this._getMoviesByGenre(movie.genre)}
      />
    );
  }

  _renderFullVideoPlayer() {
    return <FullVideoPlayer/>;
  }
}

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  genresList: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  activeGenreFilter: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  isMoreMovies: PropTypes.bool.isRequired,
  shownMoviesCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie,
  movies: state.movies,
  genresList: state.genresList,
  activeGenreFilter: state.genre,
  isMoreMovies: state.isMoreMovies,
  shownMoviesCount: state.shownMoviesCount,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.setMoviesByShowMoreButton());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
