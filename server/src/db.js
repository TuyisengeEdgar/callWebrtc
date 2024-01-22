const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  database: "call",
  host: "localhost",
  password: "123456",
  port: 5432,
});

module.exports = pool;
