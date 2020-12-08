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
const authRouter = require('./auth');

const checkToken = require("../helpers/middlewares/checkToken"); 

mainRouter.use("/", testRouter);
mainRouter.use("/products", productsRouter);
mainRouter.use("/category", categoryRouter);
mainRouter.use("/product", checkToken , productRouter);
mainRouter.use("/history", checkToken , historyRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;