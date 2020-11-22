const mySql = require("mysql"); //database

//menyambungkan database
//object connection
//setting db
const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blanja",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected")
}); //method connect

module.exports = db;