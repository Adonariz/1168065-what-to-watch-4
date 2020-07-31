import {reducer, ActionType} from "./reducer";
import {getGenresList} from "./utils";

const filterMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy-drama`,
  year: 2014,
  time: `100m`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: {
    score: `7.9`,
    level: `Good`,
    count: `1234 ratings`
  },
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
  Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Anderson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ],
  reviews: [
    {
      id: `0`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      rating: `8,9`,
    },
    {
      id: `1`,
      author: `Bill Goodykoontz`,
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      date: `November 18, 2015`,
      rating: `8,0`,
    },
    {
      id: `2`,
      author: `Amanda Greever`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      date: `November 18, 2015`,
      rating: `8,0`,
    },
  ]
};

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Fantasy`,
  },
  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Documentary`,
  },
  {
    title: `Aviator`,
    image: `img/aviator.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
  },
  {
    title: `Shutter Island`,
    image: `img/shutter-island.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Drama`,
  },
  {
    title: `Pulp Fiction`,
    image: `img/pulp-fiction.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Action`,
  },
  {
    title: `No Country for Old Men`,
    image: `img/no-country-for-old-men.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedy-drama`,
  },
  {
    title: `Snatch`,
    image: `img/snatch.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Action`,
  },
  {
    title: `Johnny English`,
    image: `img/johnny-english.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedy-drama`,
  }
];

describe(`Reducer test`, () => {
  it(`should reducer without additional parameters return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: `All genres`,
      genresList: getGenresList(movies),
      movie,
      movies,
    });
  });

  it(`should reducer set current filter by a given value`, () => {
    expect(reducer({
      genre: `All genres`,
    }, {
      type: ActionType.SET_FILTER_BY_GENRE,
      genre: `Action`,
    })).toEqual({
      genre: `Action`,
    });
  });

  it(`should reducer render filtered movies by chosen genre`, () => {
    expect(reducer({
      genre: `All genres`,
      movies,
    }, {
      type: ActionType.SET_FILTER_BY_GENRE,
      genre: `Drama`,
      movies: filterMovies(movies, `Drama`),
    })).toEqual({
      genre: `Drama`,
      movies: filterMovies(movies, `Drama`),
    });
  });
});
