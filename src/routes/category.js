const express = require("express");

const categoryRouter = express.Router();

//connect db
const db = require('../configs/mySQL');

//read all category
//endpoint category
categoryRouter.get("/", (req, res) => {


    const getAllCategory = new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM `category`";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        });
    });
    getAllCategory.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

module.exports = categoryRouter;