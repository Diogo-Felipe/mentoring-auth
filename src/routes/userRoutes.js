const express = require("express");

const { update } = require("../controllers/userController");

const user = express.Router();

user.put("/update", async (request, response) => {
  await update(request, response);
});

module.exports = user;
