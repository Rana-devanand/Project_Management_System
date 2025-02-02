const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  SALT: bcrypt.genSaltSync(10),
  JWT_SECRET_KEY : process.env.JWT,
};
