const express = require("express");

const productsRouter = express.Router();

//connect db
// const db = require('../configs/mySQL');

const productsControllers = require("../controllers/products");

const checkToken = require("../helpers/middlewares/checkToken"); 
const uploadImg = require("../helpers/middlewares/multiUpload");
//read all products
//endpoint => /products
productsRouter.get("/", productsControllers.readProducts);

//create
//endpoint products
//localhost:1000/products
productsRouter.post("/", checkToken, uploadImg, productsControllers.createProducts);

//delete products
productsRouter.delete("/delete/:id", checkToken, productsControllers.deleteProducts);

//new products
productsRouter.get("/new", productsControllers.newProducts);


//popular products
productsRouter.get("/popular", productsControllers.popularProducts);

module.exports = productsRouter;