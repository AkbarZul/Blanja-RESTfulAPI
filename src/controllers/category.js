const categoryModel = require("../models/category");


module.exports = {
    categoryget: (req, res) => {
        categoryModel.categoryget().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}