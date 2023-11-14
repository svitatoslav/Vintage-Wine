const News = require('../models/News');
const _ = require("lodash");
const Product = require("../models/Product");


exports.getNews = (req, res, next) => {
    News.find().then(news => {
        res.status(200).send(news)
    }).catch(err =>
        res.status(500).json({
            message: `Error happened on server: "${err}" `
        })
    );
}

exports.addNews = (req, res, next) => {
    const fields = _.cloneDeep(req.body);

    const newArticle = new News(fields)
    newArticle
        .save()
        .then(product => res.json(product))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}

exports.getNewstById = (req, res, next) => {
    News.findOne({
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
