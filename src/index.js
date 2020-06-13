import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Movie = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`,
};

ReactDOM.render(
    <App
      title={Movie.TITLE}
      genre={Movie.GENRE}
      year={Movie.YEAR}
    />,
    document.querySelector(`#root`)
);
