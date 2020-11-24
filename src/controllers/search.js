const searchModel = require("../models/search");

module.exports = (req, res) => {
    const { q } = req.query;
    const key = "%" + q + "%"

    searchModel(key).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}