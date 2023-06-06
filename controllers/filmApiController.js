const fetchFilm = require("../utils/fetchFilm.js");
let title;
const getFilms = async (req, res) => {
  let data = await fetchFilm(title);
  res.render("film", { data });
};

const postFilm = async (req, res) => {
  title = req.body.title;
  res.redirect(`/film/${title}`);
};
module.exports = { getFilms, postFilm };
