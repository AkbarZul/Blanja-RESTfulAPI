const productsModel = require("../models/products");

module.exports = {
    createProducts: (req, res) => {
        const { body } = req;
        const insertBody = {...body,
            product_create: new Date(Date.now()),
            product_update: new Date(Date.now()),
        };
        productsModel.createProducts(insertBody).then((data) => {
                const resProduct = {
                    id: data.insertId,
                    ...insertBody,
                };
                res.json(resProduct);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    readProducts: (req, res) => {
        const { sort, sortDesc } = req.query;
        let order = "";
        let desc = "";

        if (sort == 1) {
            order = " ORDER BY product_name"
        } else if (sort == 2) {
            order = " ORDER BY product_price"
        } else if (sort == 3) {
            order = " ORDER BY product_updated"
        }
        if (!order == "") {
            if (sortDesc == 1) {
                desc = " DESC"
            }
        }

        productsModel.readProducts(order, desc).then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    },

    deleteProducts: (req, res) => {
        const { id } = req.params;
        productsModel.deleteProducts(id).then((data) => {
            const deleteSuc = {
                msg: "data has been successfully deleted"
            }
            res.json(deleteSuc);
        }).catch((err) => {
            res.json(err);
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