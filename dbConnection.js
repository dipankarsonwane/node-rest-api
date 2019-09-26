//Postgres connection
const { Pool, Client } = require("pg");
const connectionString = "postgressql://test:test@localhost:5432/test";

const client = new Client({
  connectionString: connectionString
});
client.connect();
