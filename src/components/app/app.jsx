import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {
  const {title, genre, year, movies} = props;

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      movies={movies}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;