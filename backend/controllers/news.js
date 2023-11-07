const News = require('../models/News');
const _ = require("lodash");


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
