const express = require("express");

const productRouter = express.Router();

//connect db
const db = require('../configs/mySQL');

//get single product
productRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const getsingleproduct = new Promise((resolve, reject) => {
        const qs = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id WHERE p.id = ?"
        db.query(qs, id, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    getsingleproduct.then((data) => {
        if (data.length) {
            res.json(data);
        }

    }).catch((err) => {
        res.json(err);
    })
});

//update product
productRouter.patch("/", (req, res) => {
    const { id } = req.body;
    const { body } = req;
    const update = {
        ...body,
        product_update: new Date(Date.now()),
    };
    const idBody = { id };
    const updateProducts = new Promise((resolve, reject) => {
        const queryString = "UPDATE products SET ? WHERE ?";
        db.query(queryString, [update, idBody], (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err)
            }
        });
    });
    updateProducts.then((data) => {
        const resUpdate = {
            msg: "Update Success",
            id: data.updateId,
            ...update,
        }
        res.json(resUpdate);
    }).catch((err) => {
        res.json(err);
    })
});

module.exports = productRouter;