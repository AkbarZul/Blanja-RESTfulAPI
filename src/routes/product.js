const express = require("express");

const productRouter = express.Router();

const productControllers = require("../controllers/product");

const uploadImg = require("../helpers/middlewares/upload");

//connect db
// const db = require('../configs/mySQL');

//get single product
productRouter.get("/:id", productControllers.readSingleProduct);
productRouter.patch("/", uploadImg, productControllers.updateSingleProduct);


module.exports = productRouter;