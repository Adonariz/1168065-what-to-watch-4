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
import withFullVideo from "../../hocs/with-full-video/with-full-video";

const MoviePageWrapped = withActiveTab(MoviePage);
const SmallMovieCardWrapped = withVideo(SmallMovieCard);
const FullVideoPlayerWrapped = withFullVideo(FullVideoPlayer);

class App extends PureComponent {
  constructor() {
    super();

    this._onTitleClickHandler = this._onTitleClickHandler.bind(this);
    this._onPlayButtonClickHandler = this._onPlayButtonClickHandler.bind(this);
    this._onExitButtonClickHandler = this._onExitButtonClickHandler.bind(this);

    this.state = {
      activePage: {},
      movieSource: {},
      isVideoPlayer: false,
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

  _onPlayButtonClickHandler(movieForPlayer) {
    this.setState({
      movieSource: movieForPlayer,
      isVideoPlayer: true,
    });
  }

  _onExitButtonClickHandler() {
    this.setState({
      movieSource: {},
      isVideoPlayer: false,
    });
  }

  _renderApp() {
    const {
      activePage,
      movieSource,
      isVideoPlayer,
    } = this.state;

    if (isVideoPlayer) {
      return this._renderFullVideoPlayer(movieSource);
    }

    return Object.keys(activePage).length === 0 ? this._renderMain() : this._renderMoviePage();
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
        onPlayButtonClick={this._onPlayButtonClickHandler}
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
        onPlayButtonClick={this._onPlayButtonClickHandler}
      />
    );
  }

  _renderFullVideoPlayer(movie) {
    return (
      <FullVideoPlayerWrapped
        title={movie.title}
        movie={movie.source}
        onExitButtonClick={this._onExitButtonClickHandler}
      />
    );
  }
}

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.array.isRequired,
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
