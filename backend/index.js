import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"Aldnoah3!",
    database:"test",
})

app.use(express.json()) //Allows me to send data through external applications for example postman
app.use(cors()) //Allows my React app to get data from my localhost**

app.get("/", function(req,res) {
    res.send("Hello this is the backend")
})

app.get("/users", function(req,res) {
    const sql = "SELECT * FROM `test`.`users`;"
    db.query(sql, function(err,data) {
        if(err) {
            res.json(err)
        }

        else {
           return res.json(data)
        }

    })
})

app.get("/users/:id", function(req,res) {
    const sql = "SELECT * FROM test.users WHERE ID = ?;"
    const id = req.params.id;

    db.query(sql,[id], function(err,data) {
        if(err) return res.send(err);
        return res.json(data);
    })
})

app.post("/users", function(req,res) {
    const sql = "INSERT INTO `test`.`users` (`name`, `phone`, `email`) VALUES (?);"
    
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email
    ];
    
    db.query(sql,[values], function(err,data) {
        if (err) return res.send(err);
        return res.json(data);
})})

app.delete('/users/:id', function(req,res) {
    const sql = "DELETE FROM `test`.`users` WHERE ID = ? ";
    const id = req.params.id;

    db.query(sql,[id], function(err,data) {
        if(err) return res.send(err)
        return res.json(data);
    })
})

app.put('/users/:id', function(req, res) {
    const sql = " UPDATE `test`.`users` SET `name` = ?, `phone` = ?, `email` = ?  WHERE (`id` = ?)";
    const userId = req.params.id;

    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
    ];

    db.query(sql,[...values,userId], function(err,data) {
        if(err) return res.send(err);
        return res.json(data);
    })
})

app.listen(3000, function(req,res) {
    console.log("Server started at 3000");
})