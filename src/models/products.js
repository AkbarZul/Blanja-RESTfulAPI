const db = require("../configs/mySQL");

module.exports = {
    createProducts: (insertBody) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO products SET ?"
            db.query(qs, insertBody, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    readProducts: (param1, param2) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id" + param1 + param2;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }

            });
        });
    },

    deleteProducts: (id) => {
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM products WHERE id = ?";
            db.query(queryString, id, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    newProducts: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_create DESC";
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }

            });
        });
    },

    popularProducts: () => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id ORDER BY p.product_rating DESC";
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