const productsModel = require("../models/products");

const form = require("../helpers/form");

module.exports = {
    createProducts: (req, res) => {
        const { body } = req;
        const level = req.decodeToken.level;
        const filepath = JSON.stringify(
            req.files.map((e) => "/images" + e.filename)
        )
        const insertBody = {...body,
            product_create: new Date(Date.now()),
            product_update: new Date(Date.now()),
            product_image: filepath,
        };
        productsModel.createProducts(insertBody, level, filepath).then((data) => {
                const resProduct = {
                    id: data.insertId,
                    ...insertBody,
                };
                form.success(res, resProduct);
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    readProducts: (req, res) => {
        const { sort, sortDesc } = req.query;
       const { query } = req;
            const limit = Number(query.limit) || 5;
            const page = Number(query.page) || 1;
            const offset = (page - 1) * limit || 0;
            
        let order = "";
        let desc = "";

        if (sort == 1) {
            order = " ORDER BY product_name"
        } else if (sort == 2) {
            order = " ORDER BY product_price"
        } else if (sort == 3) {
            order = " ORDER BY product_update"
        }
        if (!order == "") {
            if (sortDesc == 1) {
                desc = " DESC"
            }
        }

        productsModel.readProducts(order, desc, limit, offset, page).then((data) => {
            if (Math.ceil(data.products / limit) == data.products) {
                res.status(404).json({
                  msg: "Page Not Found",
                  status: 404,
                });
              } else {
                form.success(res, data);
              }
        }).catch((err) => {
            form.error(res, err);
        })
    },

    deleteProducts: (req, res) => {
        const { id } = req.params;
        const level = req.decodeToken.level;
        productsModel.deleteProducts(id, level).then((data) => {
            if (data.affectedRows === 0) {
                res.status(404).json({
                    msg: "Data Not Found",
                    status: 404,
                });
            } else {
                const deleteSuc = {
                    msg: "data has been successfully deleted",
                    status: 200,
                }
                res.json(deleteSuc);
            }

        }).catch((err) => {
            form.error(res, err);
        })
    },


    newProducts: (req, res) => {
        productsModel.newProducts().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },



    popularProducts: (req, res) => {
        productsModel.popularProducts().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}