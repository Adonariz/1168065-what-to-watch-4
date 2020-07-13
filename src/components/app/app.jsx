import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const handleTitleClick = (evt) => {
  evt.preventDefault();
};

const App = ({promoMovie, movies}) => {
  return (
    <Main
      promoMovie={promoMovie}
      movies={movies}
      onTitleClick={handleTitleClick}
    />
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    DATE: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default App;
