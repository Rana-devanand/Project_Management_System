const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user.controllers");
const { body } = require("express-validator");

router.post(
  "/register",
  body("Name").notEmpty().withMessage("Please enter your name"),
  body("Email").isEmail().withMessage("Please enter your email address"),
  body("Password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 8 characters long"),
  UserController.create
);

router.post(
  "/login",
  body("Email").isEmail().withMessage("Please enter your email"),
  body("Password")
    .isLength({ min: 3 })
    .withMessage("please enter your password"),
  UserController.signIn
);

module.exports = router;
