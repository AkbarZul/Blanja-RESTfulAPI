const productModel = require("../models/product");

module.exports = {
    readSingleProduct: (req, res) => {
        productModel.readSingleProduct(req).then((data) => {
            if (data.length) {
                res.json(data);
            }
        }).catch((err) => {
            res.json(err);
        })
    },

    updateSingleProduct: (req, res) => {
        const { id } = req.body;
        const { body } = req;
        const update = {
            ...body,
            product_update: new Date(Date.now()),
        };
        const idBody = { id };

        productModel.updateSingleProduct(update, idBody).then((data) => {
            const resUpdate = {
                msg: "Update Success",
                id: data.updateId,
                ...update,
            }
            res.json(resUpdate);
        }).catch((err) => {
            res.json(err);
        })
    }

}