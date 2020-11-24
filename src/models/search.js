const db = require("../configs/mySQL");

module.exports = (key) => {
    return new Promise((resolve, reject) => {
        const querySearchProducts = `SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id WHERE category_name LIKE "%${key}" OR p.product_name LIKE "%${key}"`;
        db.query(querySearchProducts, key, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}