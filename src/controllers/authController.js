const { createUserToken } = require("../lib/auth");

const { getUserByLogin } = require("../models/authModel");
const { createUser } = require("../models/userModel");

const login = async (request, response) => {
  const { cpf, password } = request.body;

  const user = await getUserByLogin(cpf, password);

  if (!user) {
    return response.status(404).json({ msg: "User not found" });
  }

  delete user.password;

  const token = createUserToken(user);

  return response.status(200).json({
    data: {
      user,
      token,
    },
  });
};

const signup = async (request, response) => {
  const { cpf, firstName, lastName, email, password } = request.body;

  const user = { cpf, firstName, lastName, email, password };

  await createUser(user);

  response.status(201).json({ msg: "User Created" });
};

module.exports = {
  login,
  signup,
};
