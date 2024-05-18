
const dotenv = require("dotenv");
dotenv.config({path: "../../../../.env"});


module.exports = {

client: "pg",
connection: DB_URL,
migrations: {
  tableName: "knex_migrations",
},
pool: {
  min: 2,
  max: 10,
}
};
