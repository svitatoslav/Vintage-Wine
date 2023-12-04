const Shares = require('../models/Shares');
const _ = require("lodash");
const Product = require("../models/Product");


exports.getShares = (req, res, next) => {
    Shares.find().then(shares => {
        res.status(200).send(shares)
    }).catch(err =>
        res.status(500).json({
            message: `Error happened on server: "${err}" `
        })
    );
}

exports.addShares = (req, res, next) => {
    const fields = _.cloneDeep(req.body);

    const newArticle = new Shares(fields)
    newArticle
        .save()
        .then(product => res.json(product))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}

exports.getSharesById = (req, res, next) => {
    Shares.findOne({
        _id: req.params.id
    })
        .then(article => {
            if (!article) {
                res.status(400).json({
                    message: `Article with id ${req.params.id} is not found`
                });
            } else {
                res.json(article);
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
