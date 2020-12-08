const db = require("../configs/mySQL");

module.exports = {
    createHistory: (insertHistory, level) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO history SET ?"
            if (level < 2) {
                reject({
                    msg: "your level is too high to create history",
                    status: 401,
                })
            } else {
                db.query(qs, [insertHistory, level], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
            }
           
        });
    },

    readHistory: (level) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM `history` ORDER BY created_at DESC";
            if (level < 2) {
                reject({
                    msg: "your level is too high to read history",
                    status: 401,
                })
            } else {
                db.query(queryString, level, (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
    
                });
            }
           
        });
    }
}