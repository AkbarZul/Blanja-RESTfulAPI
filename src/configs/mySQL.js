const mySql = require("mysql"); //database

//menyambungkan database
//object connection
//setting db

const {HOST, DB, USER, PASS} = process.env;

console.log(HOST)
console.log(DB)
console.log(USER)
console.log(PASS)

const db = mySql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB,
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected")
}); //method connect

module.exports = db;