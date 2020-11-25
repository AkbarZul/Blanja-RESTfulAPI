const historyModel = require("../models/history");

const form = require("../helpers/form");

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
                form.success(res, resHistory);
            })
            .catch((err) => {
                form.error(res, err);
            });
    },

    readHistory: (req, res) => {
        historyModel.readHistory().then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err);
        })
    }
}