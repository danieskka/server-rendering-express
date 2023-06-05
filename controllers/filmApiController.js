const fetchFilm = require("../utils/fetchFilm.js");

const getFilms = async (req, res) => {
  let data = await fetchFilm(req.body.title);
  res.render("film", { data });
};

module.exports = { getFilms };
