import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./components/mocks/movies";
import movie from "./components/mocks/movie";


ReactDOM.render(
    <App
      movie={movie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
