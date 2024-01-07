const News = require('../models/News');
const _ = require("lodash");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dyjwpccso',
    api_key: '535722222753226',
    api_secret: 'ZAkkqjUsrURXMeMnqCVJeK4zyrw',
});


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

    const newArticle = new News(fields);

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


exports.uploadNewsImg = (req, res, next) => {
    News.findOne({ _id: req.params.id })
        .then(async promo => {
            if (!promo) {
                return res
                    .status(400)
                    .json({
                        message: `Excursion with title "${req.params.id}" is not found.`
                    });
            } else {
                try {
                    const result = await cloudinary.uploader.upload(req.file.path);
                    const initialQuery = _.cloneDeep(promo);
                    initialQuery.image = result.url;

                    News.findOneAndUpdate(
                        { _id: req.params.id },
                        { $set: initialQuery },
                        { new: true }
                    )
                        .then(promo => {
                            res.json({ promo });
                        })
                        .catch(err =>
                            res.status(400).json({
                                message: `Error happened on server: "${err}" `
                            })
                        );

                } catch (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Error uploading image' });
                }
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}