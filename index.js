const express = require("express");
const path = require("path");
const jade = require("jade");
const mysql = require("mysql");
const app = express();

app.set("views", path.join(__dirname, "views2"));
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Hallo words"));
app.get("/home/:username", (req, res) => {
  //   res.render("home", {
  //     name: req.params.username
  //   });
  //   var temp = [];
  //   let sql = "select * from product";
  //   conn.query(sql, (err, resquery) => {
  //     res.send(resquery);
  //   });

  var getdt = getData();
  console.log(getdt);
  res.send(getdt);
});

function getData() {
  //   var data = [];
  let sql = "select * from product";
  conn.query(sql, (err, resquery) => {
    return "asd";
  });
  //   return "bawah";
  console.log(data.res);
  return data;
}

app.listen(3000, () => {
  console.log("Port 3000 Connected");
});

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_project04"
});

conn.connect(err => {
  if (err) throw err;
  console.log("Database ready");
});
