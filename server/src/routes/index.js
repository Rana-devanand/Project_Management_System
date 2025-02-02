const express = require("express");
const router = express.Router();
const userRoutes = require("./V1/userRoutes");

router.use("/V1/user/", userRoutes);

module.exports = router;
