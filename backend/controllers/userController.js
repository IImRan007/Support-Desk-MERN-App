const asyncHandler = require("express-async-handler");

const registerUser = (req, res) => {
  res.status(201).send("Register User");
};

const loginUser = (req, res) => {
  res.status(201).send("Login User");
};

module.exports = { registerUser, loginUser };
