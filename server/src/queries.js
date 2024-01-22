const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const getUserByname = "SELECT * FROM users WHERE name = $1";
const getSpecificUsers = "SELECT * FROM users WHERE id != $1";
checkUserEmail = "SELECT s FROM users s WHERE s.email=$1";
const addUser = "INSERT INTO users(name,number,email) values($1,$2,$3)";
const updateUser = "UPDATE users SET  avatar=$1 WHERE id =$2";
const deleteUser = "DELETE FROM users  WHERE id=$1";
module.exports = {
  getUsers,
  getSpecificUsers,
  getUserById,
  getUserByname,
  checkUserEmail,
  addUser,
  deleteUser,
  updateUser,
};
