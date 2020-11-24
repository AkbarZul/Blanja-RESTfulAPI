const express = require("express");

const productsRouter = express.Router();

//connect db
const db = require('../configs/mySQL');

//read all products
//endpoint => /products
productsRouter.get("/", (req, res) => {


    const getAllProducts = new Promise((resolve, reject) => {
        const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id";
        if (req.query.name != null) {
            queryString += "ORDER BY p.product_name"
            if (req.query.name == 'desc') {
                queryString += "DESC"
            }
        } else if (req.query.price != null) {
            queryString += "ORDER BY p.product_price"
            if (req.query.price == 'desc') {
                queryString += "DESC"
            }
        } else if (req.query.date) {
            queryString += "ORDER BY p.product_update"
            if (req.query.date == 'desc') {
                queryString += "DESC"
            }
        }
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        });
    });
    getAllProducts.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

//create
//endpoint products
//localhost:1000/products
productsRouter.post("/", (req, res) => {
    //mendapat request dari client
    //lakukan proses query ke db
    //kirim response
    const { body } = req;
    const insertBody = {...body,
        product_create: new Date(Date.now()),
        product_update: new Date(Date.now()),
    };
    const postProduct = new Promise((resolve, reject) => {
        const qs = "INSERT INTO products SET ?"
        db.query(qs, insertBody, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    postProduct.then((data) => {
            const resProduct = {
                id: data.insertId,
                ...insertBody,
            };
            res.json(resProduct);
        })
        .catch((err) => {
            res.json(err);
        });
});

//delete products
productsRouter.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const deleteProducts = new Promise((resolve, reject) => {
        const queryString = "DELETE FROM products WHERE id = ?";
        db.query(queryString, id, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    deleteProducts.then((data) => {
        const deleteSuc = {
            msg: "data has been successfully deleted"
        }
        res.json(deleteSuc);
    }).catch((err) => {
        res.json(err);
    })
});

//new products
productsRouter.get("/new", (req, res) => {


    const getAllProducts = new Promise((resolve, reject) => {
        const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_create DESC";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        });
    });
    getAllProducts.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

//popular products
productsRouter.get("/popular", (req, res) => {


    const getAllProducts = new Promise((resolve, reject) => {
        const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_rating DESC";
        db.query(queryString, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }

        });
    });
    getAllProducts.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

module.exports = productsRouter;