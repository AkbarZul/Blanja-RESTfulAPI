const express = require("express");

const historyRouter = express.Router();

//connect db
const db = require('../configs/mySQL');

// post history
//endpoint 1000/history
historyRouter.post("/", (req, res) => {
    //mendapat request dari client
    //lakukan proses query ke db
    //kirim response
    const { body } = req;
    const insertHistory = {...body,
        created_at: new Date(Date.now()),
        update_at: new Date(Date.now()),
    };
    const postHistory = new Promise((resolve, reject) => {
        const qs = "INSERT INTO history SET ?"
        db.query(qs, insertHistory, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    postHistory.then((data) => {
            const resHistory = {
                id: data.insertId,
                ...insertHistory,
            };
            res.json(resHistory);
        })
        .catch((err) => {
            res.json(err);
        });
});

//get history
historyRouter.get("/", (req, res) => {


    const getAllHistory = new Promise((resolve, reject) => {
        const queryString = "SELECT * FROM `history` ORDER BY created_at DESC";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        });
    });
    getAllHistory.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

module.exports = historyRouter;