require("dotenv").config();

const getFilms = async (film) => {
  let response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${film}`
  );
  let result = await response.json();
  let {
    Title: title,
    Year: year,
    Director: director,
    Actors: actors,
    Poster: img,
  } = result;
  return { title, year, director, actors, img };
};

module.exports = getFilms;
