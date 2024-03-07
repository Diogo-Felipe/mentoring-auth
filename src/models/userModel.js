const connection = require("../database/connection");

const createUser = async (user) => {
  const { cpf, firstName, lastName, email, password } = user;

  await connection("users").insert({
    cpf,
    firstName,
    lastName,
    email,
    password,
  });
};

const updateUser = async (user, cpf) => {
  const { updatedCpf, firstName, lastName, email, password } = user;

  await connection("users")
    .update({
      updatedCpf,
      firstName,
      lastName,
      email,
      password,
    })
    .where("cpf", cpf);
};

module.exports = {
  createUser,
  updateUser,
};
