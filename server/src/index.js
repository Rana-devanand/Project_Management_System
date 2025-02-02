const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server_config");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const createAndStartServerRequest = () => {
  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
};

createAndStartServerRequest();