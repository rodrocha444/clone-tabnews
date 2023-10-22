import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5433,
    user: "postgres",
    password: "admin",
    database: "postgres",
  });
  await client.connect();

  const result = await client.query(queryObject);

  await client.end();

  return result;
}

export default {
  query: query,
};
