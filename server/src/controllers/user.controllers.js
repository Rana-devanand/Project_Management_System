const UserService = require("../services/user.services");
const userServices = new UserService();
const { validationResult } = require("express-validator");

const create = async (req, res) => {
  try {
    const Error = validationResult(req);
    if (!Error.isEmpty()) {
      return res.status(400).json({
        data: {},
        message: "Validation failed",
        status: "error",
        error: Error.array(),
      });
    }
    const response = await userServices.createUser(req.body);
    return res.status(201).json({
      data: response,
      message: "Successfully created a new account",
      status: "success",
      error: {},
    });
  } catch (error) {
    console.log(
      "Error in Controller to create a new account - " + error.message
    );
    return res.status(500).json({
      data: {},
      message: "An error occurred while creating a new account",
      status: "error",
      error: error.message,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const Error = validationResult(req);
    if (!Error.isEmpty()) {
      return res.status(400).json({
        data: {},
        message: "Validation failed",
        status: "error",
        error: Error.array(),
      });
    }
    const response = await userServices.signIn(
      req.body.Email,
      req.body.Password
    );
    return res.status(200).json({
      data: response,
      message: "User signed in successfully",
      status: "success",
      error: {},
    });
  } catch (error) {
    console.log("Error in Controller to sign in a user - " + error.message);
    return res.status(500).json({
      data: {},
      message: "An error occurred while signing in",
      status: "error",
      error: error.message,
    });
  }
};

module.exports = {
  create,
  signIn,
};
