import React, {Fragment} from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {
    genres,
    onGenreClick,
    activeGenreFilter,
  } = props;

  return (
    <Fragment>
      <ul className="catalog__genres-list">
        {genres.map((genre) => {
          return (
            <li
              key={genre}
              className={activeGenreFilter === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            >
              <a href="#" className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onGenreClick(genre);
                }}
              >
                {genre}
              </a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

GenresList.propTypes = {
  activeGenreFilter: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenresList;
