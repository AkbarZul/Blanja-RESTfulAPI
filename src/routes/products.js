const express = require("express");

const productsRouter = express.Router();

//connect db
// const db = require('../configs/mySQL');

const productsControllers = require("../controllers/products");

const checkToken = require("../helpers/middlewares/checkToken"); 
//read all products
//endpoint => /products
productsRouter.get("/", productsControllers.readProducts);

//create
//endpoint products
//localhost:1000/products
productsRouter.post("/", checkToken, productsControllers.createProducts);

//delete products
productsRouter.delete("/delete/:id", checkToken, productsControllers.deleteProducts);
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