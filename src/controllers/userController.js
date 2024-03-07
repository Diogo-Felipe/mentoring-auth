const { updateUser } = require("../models/userModel");

const update = async (request, response) => {
  const { user: tokenUserString } = request.headers;

  const tokenUserObject = JSON.parse(tokenUserString);
  const { cpf } = tokenUserObject;

  const { updatedCpf, firstName, lastName, email, password } = request.body;

  const user = { updatedCpf, firstName, lastName, email, password };

  await updateUser(user, cpf);

  response.status(201).json({ msg: "User Created" });
};

module.exports = {
  update,
};
