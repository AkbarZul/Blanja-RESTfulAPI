const { query } = require("express");
const db = require("../configs/mySQL");

module.exports = {
    createProducts: (insertBody, level, filepath) => {
        return new Promise((resolve, reject) => {
            const qs = "INSERT INTO products SET ?"
            if (level > 1) {
                reject({
                    msg: "your level is small to create product",
                    status: 401,
                })
            } else {
                db.query(qs, [insertBody, level, filepath], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
            }
            
        });
    },

    deleteProducts: (id, level) => {
        return new Promise((resolve, reject) => {
            const queryString = "DELETE FROM products WHERE id = ?";
            if (level > 1) {
                reject({
                    msg: "your level is small to delete product",
                    status: 401,
                })
            } else {
                db.query(queryString, [id, level], (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                });
            }
           
        });
    },

    readProducts: (param1, param2, limit, offset, page) => {
        return new Promise((resolve, reject) => {
            
            const queryString = "SELECT p.id, p.product_name, p.product_description, p.product_price, c.category_name, p.product_rating, p.product_size, p.product_color, p.product_total, p.product_condition, p.product_create, p.product_image, p.product_update FROM products AS p JOIN category AS c ON c.id = p.category_id" + param1 + param2 + " LIMIT ? OFFSET ?" ;
            db.query(queryString, [limit, offset, page], (err, data) => {
                const newResult = {
                    products: data,
                    pageInfo: {
                      currentPage: page || 1,
                      previousPage:
                        page === 1 ? null : `/product?page=${page - 1}&limit=${limit}`,
                      nextpage: page ===
                        (data.length / limit) || page === limit
                          ? null
                          : `/product?page=${page + 1}&limit=${limit}`,
                    },
                  };
                  
                if (!err) {
                    resolve(newResult);
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