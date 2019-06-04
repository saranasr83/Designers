const mysql = require ("mysql");
var express = require("express");


module.exports = function (app,connection){
    app.get('/', function (req, res) {
        res.send("Hello World From Sara!!")
        
    })
    app.get('/products', function (req, res) {
        connection.query("SELECT * FROM items", function (err,result) {
            if (err) throw err;
            res.json({ data:result })
        })
    })
    app.get('/result', function (req, res) {
        console.log("request", req.body)
        // connection.query('SELECT * FROM items WHERE kind = ? AND brand = ?' 
        // 
        // 'SELECT * FROM items WHERE (brand = "Chanel" AND kind = "bag" )'
        // connection.query("SELECT * FROM items"
        connection.query('SELECT * FROM items WHERE (brand = "Chanel" AND kind = "bag" )'
        , function (err, result) {
            if (err) throw err;
            res.json({data:result})
        })
        
    })
}
// 'SELECT * FROM items WHERE (brand = "Chanel" AND kind = "bag" )'
