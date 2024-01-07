const Shares = require('../models/Shares');
const _ = require("lodash");
const queryCreator = require("../commonHelpers/queryCreator");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dyjwpccso',
    api_key: '535722222753226',
    api_secret: 'ZAkkqjUsrURXMeMnqCVJeK4zyrw',
});


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

    const updatedShares = queryCreator(fields);

    const newArticle = new Shares(updatedShares);

    newArticle
        .save()
        .then(product => res.json(product))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}

exports.uploadSharesImg = (req, res, next) => {
    Shares.findOne({ _id: req.params.id })
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
                    const initialQuery = _.cloneDeep(req.body);
                    initialQuery.imageURL = result.url;
                    const updatedPromo = queryCreator(initialQuery);

                    Shares.findOneAndUpdate(
                        { _id: req.params.id },
                        { $set: updatedPromo },
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
