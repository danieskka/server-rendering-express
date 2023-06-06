const express = require("express");
const filmApiRouter = express.Router();
const filmsApiController = require("../controllers/filmApiController.js");
const checkApiKey = require("../middlewares/auth_api_key.js");

filmApiRouter.get("/:title?", filmsApiController.getFilms);

filmApiRouter.post("/", filmsApiController.postFilm);
module.exports = filmApiRouter;
