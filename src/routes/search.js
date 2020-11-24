const express = require("express");

const searchRouter = express.Router();

//connect db
const db = require('../configs/mySQL');

//seacrh
searchRouter.get("/", (req, res) => {
    const { q } = req.query;
    const key = "%" + q + "%"
    const searchProducts = new Promise((resolve, reject) => {
        const querySearchProducts = `SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id WHERE category_name LIKE "%${key}" OR p.product_name LIKE "%${key}"`;
        db.query(querySearchProducts, key, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    searchProducts.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = searchRouter;