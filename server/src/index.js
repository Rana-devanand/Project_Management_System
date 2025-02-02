const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server_config");
const ApiGateway = require("./routes/index");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", ApiGateway);

const createAndStartServerRequest = () => {
  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
};

createAndStartServerRequest();
