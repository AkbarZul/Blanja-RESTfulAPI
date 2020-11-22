const express = require("express");

//ambil router
//mengatur alur
const mainRouter = express.Router();

//import
const testRouter = require('./test');
const productsRouter = require('./products');
const categoryRouter = require('./category');
const productRouter = require('./product');
const historyRouter = require('./history');
const searchRouter = require('./search');

mainRouter.use("/", testRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/category", categoryRouter);
mainRouter.use("/product", productRouter);
mainRouter.use("/history", historyRouter);
mainRouter.use("/search", searchRouter);

module.exports = mainRouter;