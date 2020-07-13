import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {Movie, movies} from "./components/mocks/movies";


ReactDOM.render(
    <App
      promoMovie={Movie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
