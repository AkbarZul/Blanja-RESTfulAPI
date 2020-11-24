const historyModel = require("../models/history");

module.exports = {
    createHistory: (req, res) => {
        const { body } = req;
        const insertHistory = {...body,
            created_at: new Date(Date.now()),
            update_at: new Date(Date.now()),
        };

        historyModel.createHistory(insertHistory).then((data) => {
                const resHistory = {
                    id: data.insertId,
                    ...insertHistory,
                };
                res.json(resHistory);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    readHistory: (req, res) => {
        historyModel.readHistory().then((data) => {
            res.json(data);
        }).catch((err) => {
            res.json(err);
        })
    }
}