import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Movie, MOVIE_TITLES} from "./components/mocks/const";


ReactDOM.render(
    <App
      title={Movie.TITLE}
      genre={Movie.GENRE}
      year={Movie.YEAR}
      movies={MOVIE_TITLES}
    />,
    document.querySelector(`#root`)
);
