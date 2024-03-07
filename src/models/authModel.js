const connection = require("../database/connection");

const getUserByLogin = async (cpf, password) => {
  const user = await connection("users")
    .select("*")
    .where("cpf", cpf)
    .andWhere("password", password);

  return user;
};

module.exports = {
  getUserByLogin,
};
