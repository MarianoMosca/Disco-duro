"use strict";

const insertUserQuery = require("../../db/queries/users/insertUserQuery");
const { generateError } = require("../../utils/helpers");

const newUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      generateError("Faltan campos", 400);
    }

    await insertUserQuery(name, email, password);

    res.send({
      status: "ok",
      message: "usuario creado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newUser;
