/*
require('./db/mongoose');

const express = require('express');
const app = express();
app.listen(3001, (req, res) => {
console.log('Tesfish The Server runs perfeclty Good Luck!');
});
*/
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MERN_Tesfish");

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
  
    res.json(user);
  });

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});