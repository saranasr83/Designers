const mysql = require ("mysql");
var express = require("express");


module.exports = function (app,connection){
    app.get('/', function (req, res) {
        res.send("Hello World From Sara!!")
        
    })
    app.get('/data', function (req, res) {
        connection.query("SELECT * FROM items", function (err,data) {
            if (err) throw err;
            res.json({items:data})
        })
    })
}

