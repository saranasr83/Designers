const bodyParser = require ("body-parser");
const express = require ("express");
const mysql = require ('mysql');
const cors = require ('cors');
const app = express();
//double check the port number ?????????????????????/
const PORT = process.env.PORT || 3002;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'products_db'
});
// use the body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

app.use(cors());
 require("./controller/my-app-controller.js")(app,connection);

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
  
