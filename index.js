require("dotenv").config();
const express = require("express"); // ambil dari node
const mainRouter = require('./src/routes/index');

const logger = require("morgan");
// inisialisasi si express 
//aplikasi si express
const app = express()

//test express
const port = 1000;

const cors = require("cors");
app.use(express.static("public"))
app.use(cors());

//sambung ke aplikasi express
app.listen(port, () => {
    console.log(`server is running at port ${port}`)
});


//menambahkan loger
app.use(logger("dev"));


//menambah body parse
app.use(express.urlencoded({ extended: false }));

//parser raw json
app.use(express.json());

//untuk middleware mainrouter
app.use("/", mainRouter);


module.exports = app;