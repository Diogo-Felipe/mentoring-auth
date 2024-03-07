const express = require("express");

const { login, signup } = require("../controllers/authController");

const auth = express.Router();

auth.post("/login", async (request, response) => {
  await login(request, response);
});

auth.post("/signup", async (request, response) => {
  await signup(request, response);
});

module.exports = auth;
