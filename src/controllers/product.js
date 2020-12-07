const productModel = require("../models/product");

const form = require("../helpers/form");
module.exports = {
    readSingleProduct: (req, res) => {
        productModel.readSingleProduct(req).then((data) => {
            if (!data.length) {
                res.status(404).json({
                    msg: "Data Not Found",
                    status: 404,
                });
            } else {
                form.success(res, data[0]);
            }
        }).catch((err) => {
            form.error(res, err);
        })
    },

    updateSingleProduct: (req, res) => {
        const { id } = req.body;
        const { body } = req;
        const level = req.decodeToken.level;
        const update = {
            ...body,
            product_update: new Date(Date.now()),
        };
        const idBody = { id };

        productModel.updateSingleProduct(update, idBody, level).then((data) => {
            if (data.affectedRows === 0) {
                res.status(404).json({
                    msg: "Data Not Found",
                    status: 404,
                })
            } else {
                const resUpdate = {
                    msg: "Update Success",
                    id: data.updateId,
                    ...update,
                }
                form.success(res, resUpdate);
            }

        }).catch((err) => {
            form.error(res, err);
        })
    }

}