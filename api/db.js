import mysql from "mysql";

export const db = mysql.createConnection({
  host: "blog.coqdumvxvafl.eu-north-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "megha1105",
  database: "blog",
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
