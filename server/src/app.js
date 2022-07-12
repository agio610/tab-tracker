const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "Hello world",
  });
});

app.listen(8082, (err) => {
  if (err) throw error;
  console.log("Server is listening at 8082");
});
