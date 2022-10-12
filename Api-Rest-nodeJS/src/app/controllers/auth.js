const jwt = require("jsonwebtoken");
const mysqlConnection = require("../lib/database");
const mysqlOperations = require("../lib/db-operations");
const { TABLES } = require("../config/constants.js");
const authService = require("../services/auth.service");
const authController = {};
const { SECRET_KEY } = require("../config/constants");

authController.signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  const data = {
    username,
    email,
    password: await authService.encryptPassword(password),
  };
  const query = `
        CALL addUser(?,?,?);
    `;
  mysqlOperations.addItem(data, query, (err, rows) => {});
  const token = jwt.sign({ email, username }, SECRET_KEY, {
    expiresIn: 86400, //24 horas
  });
  res.status(200).json({ message: "Success sign up", token });
};

authController.signIn = async (req, res) => {
  const { email, password } = req.body;
  mysqlOperations.getItem(
    { email },
    {
      table: TABLES.usuarios,
      field: "email = ?",
    },
    async (err, rows) => {
      if (!err) {
        const dataUser = rows[0];
        const correctPassword = await authService.comparePassword(
            password,
            dataUser.password
          );
        console.log(correctPassword,dataUser.password,password);
        if (correctPassword) {
            const token = jwt.sign(
              { email: dataUser.email, username: dataUser.username },
              SECRET_KEY,
              {
                expiresIn: 86400, //24 horas
              }
            );
            res.header("auth-token", token).json(token);
        } else {
            res.status(400).json("Invalid password");
        }
      } else {
        res.status(400).json("Invalid Email");
      }
    }
  );
};

module.exports = authController;
