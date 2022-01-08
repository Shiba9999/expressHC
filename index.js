const express = require("express");
const app = express();
var format = require("date-format");

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.status(400).send("good res");
});
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    name: "shiba",
    followers: "500",
    follows: "50",
    date: format.asString("hh:mm:ss.SSS", new Date()),
  };
  res.json(instaSocial);
});
app.get("/api/v1/:name/:id", (req, res) => {
  console.log(req.params.id);
  res.send(req.params.name);
});
app.listen(PORT, () => {
  console.log(`running at ${PORT}`);
});
