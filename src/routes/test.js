const express = require("express");

const testRouter = express.Router();

//localhost:1000/
//tester
testRouter.get("/", (req, res) => {
    res.send("selamat datang dunia")
});

module.exports = testRouter;