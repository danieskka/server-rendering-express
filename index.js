const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const error404 = require("./middlewares/error404.js");

const filmsApiRoutes = require("./routes/filmApiRoutes.js");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {});
});
app.use("/film", filmsApiRoutes);

app.listen(port, () => {
  console.log(`Este server funciona en el puerto ${3000}`);
});
