const db = require("../configs/mySQL");

module.exports = {
    categoryget: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT * FROM `category`";
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