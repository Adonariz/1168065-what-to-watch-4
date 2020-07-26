import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._onTitleClickHandler = this._onTitleClickHandler.bind(this);

    this.state = {
      activePage: {},
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
            <SmallMovieCard
              key={movie.title}
              movie={movie}
              onCardHover={(currentFilm) => {
                this.setState({
                  activeCard: currentFilm,
                });
              }}
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

  _renderApp() {
    const {activePage} = this.state;

    return Object.keys(activePage).length === 0 ? this._renderMain() : this._renderMoviePage();
  }

  _renderMain() {
    const {movie, movies} = this.props;

    return (
      <Main
        movie={movie}
        movies={movies}
        onTitleClick={this._onTitleClickHandler}
        onPosterClick={this._onTitleClickHandler}
      />
    );
  }

  _renderMoviePage() {
    const {movie} = this.props;

    return (
      <MoviePage
        movie={movie}
        sortedMovies={this._getMoviesByGenre(movie.genre)}
      />
    );
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
};

export default App;
