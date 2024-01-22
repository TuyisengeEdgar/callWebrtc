const pool = require("./db");
const queries = require("./queries");
const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSpecificUsers = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getSpecificUsers, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const getUserByname = (req, res) => {
  const name = req.params.name;

  pool.query(queries.getUserByname, [name], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { name, number, email } = req.body;

  pool.query(queries.checkUserEmail, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) res.send("Email already exist⛔⛔");

    if (!results.rows.length) {
      pool.query(queries.addUser, [name, number, email], (error, results) => {
        if (error) throw error;
        if (results) res.status(201).send("data successfully inserted...");
      });
    }
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.deleteUser, [id], (error, results) => {
    if (error) throw error;

    if (results)
      res.status(200).json({
        status: "success",
        message: `user with id : ${id} removed successfully`,
      });
  });
};
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { avatar } = req.body;
  pool.query(queries.updateUser, [avatar, id], (error, results) => {
    if (error) throw error;

    if (results)
      res.status(200).json({
        status: "success",
        message: `user with id : ${id} updated successfully`,
      });
  });
};
module.exports = {
  getUsers,
  getSpecificUsers,
  getUserById,
  getUserByname,
  addUser,
  deleteUser,
  updateUser,
};
