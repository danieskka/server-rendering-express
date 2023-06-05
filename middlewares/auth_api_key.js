const checkApiKey = function (req, res, next) {
  if (req.query.API_KEY === "71d942fb") {
    next();
  } else {
    res.status(401).send("Error. API KEY no proveída");
  }
};
module.exports = checkApiKey;
