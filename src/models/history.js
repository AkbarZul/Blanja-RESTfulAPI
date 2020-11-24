const db = require("../configs/mySQL");

module.exports = {
    createHistory: (insertHistory) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO history SET ?"
            db.query(qs, insertHistory, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    readHistory: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM `history` ORDER BY created_at DESC";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }

            });
        });
    }
}