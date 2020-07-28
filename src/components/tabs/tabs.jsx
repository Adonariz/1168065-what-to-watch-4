import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";

const Tabs = ({onLinkClick, currentTab}) => {
  return (
    <ul className="movie-nav__list">
      <li className={currentTab === Tab.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={onLinkClick(Tab.OVERVIEW)}
      >
        <a href="#" className="movie-nav__link">Overview</a>
      </li>
      <li className={currentTab === Tab.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={onLinkClick(Tab.DETAILS)}
      >
        <a href="#" className="movie-nav__link">Details</a>
      </li>
      <li className={currentTab === Tab.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={onLinkClick(Tab.REVIEWS)}
      >
        <a href="#" className="movie-nav__link">Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Tabs;
