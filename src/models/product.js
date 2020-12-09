const db = require("../configs/mySQL");

module.exports = {
    readSingleProduct: (req) => {
        const { id } = req.params;
        return new Promise((resolve, reject) => {
            const qs = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_image, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id WHERE p.id = ?"
            db.query(qs, id, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    updateSingleProduct: (update, idBody, level) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE products SET ? WHERE ?";
            if (level > 1) {
                reject({
                    msg: "your level is small to edit product",
                    status: 401,
                })
            } else {
                db.query(queryString, [update, idBody, level], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err)
                    }
                });
            }
           
        });
    }
}