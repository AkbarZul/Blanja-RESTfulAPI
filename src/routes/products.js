const express = require("express");

const productsRouter = express.Router();

//connect db
// const db = require('../configs/mySQL');

const productsControllers = require("../controllers/products");
//read all products
//endpoint => /products
productsRouter.get("/", productsControllers.readProducts);

//     const { sort, sortDesc } = req.query;
//     let order = "";
//     let desc = "";

//     if (sort == 1) {
//         order = " ORDER BY product_name"
//     } else if (sort == 2) {
//         order = " ORDER BY product_price"
//     } else if (sort == 3) {
//         order = " ORDER BY product_updated"
//     }
//     if (!order == "") {
//         if (sortDesc == 1) {
//             desc = " DESC"
//         }
//     }

//     const getAllProducts = new Promise((resolve, reject) => {
//         const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id" + order + desc;
//         db.query(queryString, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }

//         });
//     });
//     getAllProducts.then((data) => {
//         res.json(data);
//     }).catch((err) => {
//         res.json(err);
//     })
// });

//create
//endpoint products
//localhost:1000/products
productsRouter.post("/", productsControllers.createProducts);
//mendapat request dari client
//lakukan proses query ke db
//kirim response
//     const { body } = req;
//     const insertBody = {...body,
//         product_create: new Date(Date.now()),
//         product_update: new Date(Date.now()),
//     };
//     const postProduct = new Promise((resolve, reject) => {
//         const qs = "INSERT INTO products SET ?"
//         db.query(qs, insertBody, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         });
//     });
//     postProduct.then((data) => {
//             const resProduct = {
//                 id: data.insertId,
//                 ...insertBody,
//             };
//             res.json(resProduct);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

//delete products
productsRouter.delete("/delete/:id", productsControllers.deleteProducts);
//     const { id } = req.params;
//     const deleteProducts = new Promise((resolve, reject) => {
//         const queryString = "DELETE FROM products WHERE id = ?";
//         db.query(queryString, id, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }
//         });
//     });
//     deleteProducts.then((data) => {
//         const deleteSuc = {
//             msg: "data has been successfully deleted"
//         }
//         res.json(deleteSuc);
//     }).catch((err) => {
//         res.json(err);
//     })
// });

//new products
productsRouter.get("/new", productsControllers.newProducts);


//     const getAllProducts = new Promise((resolve, reject) => {
//         const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_create DESC";
//         db.query(queryString, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }

//         });
//     });
//     getAllProducts.then((data) => {
//         res.json(data);
//     }).catch((err) => {
//         res.json(err);
//     })
// });

//popular products
productsRouter.get("/popular", productsControllers.popularProducts);


//     const getAllProducts = new Promise((resolve, reject) => {
//         const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_rating DESC";
//         db.query(queryString, (err, data) => {
//             if (!err) {
//                 resolve(data);
//             } else {
//                 reject(err);
//             }

//         });
//     });
//     getAllProducts.then((data) => {
//         res.json(data);
//     }).catch((err) => {
//         res.json(err);
//     })
// });

module.exports = productsRouter;