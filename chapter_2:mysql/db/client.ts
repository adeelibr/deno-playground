import { Client } from "https://deno.land/x/mysql/mod.ts";
// config
import { DATABASE, TABLE } from "./config.ts";

const client = await new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "",
  db: "",
});

const run = async () => {
  // create database (if not created before)
  await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
  // select db
  await client.execute(`USE ${DATABASE}`);

  // delete table if it exists before
  await client.execute(`DROP TABLE IF EXISTS ${TABLE.TODO}`);
  // create table
  await client.execute(`
    CREATE TABLE ${TABLE.TODO} (
        id int(11) NOT NULL AUTO_INCREMENT,
        todo varchar(100) NOT NULL,
        isCompleted boolean NOT NULL default false,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `);
};

run();

export default client;
