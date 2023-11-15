const LastViewedProduct = require('../models/LastViewedProduct');
const _ = require('lodash');
const queryCreator = require('../commonHelpers/queryCreator');
const uniqueRandom = require('unique-random');
const rand = uniqueRandom(0, 999999);


exports.getLastViewedProducts = (req, res, next) => {
    LastViewedProduct.find()
        .then((lastViewedProducts) => res.status(200).json(lastViewedProducts))
        .catch((err) =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.addLastViewedProduct = (req, res, next) => {
    const lastViewedProductFields = _.cloneDeep(req.body);

    lastViewedProductFields.itemNo = rand();

    try {
        lastViewedProductFields.name = lastViewedProductFields.name.toLowerCase().trim().replace(/\s\s+/g, ' ');

       
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `
        });
    }

    const updatedLastViewedProduct = queryCreator(lastViewedProductFields);

    const newLastViewedProduct = new Product(updatedLastViewedProduct);

    newLastViewedProduct
        .save()
        .then((lastViewedProduct) => res.json(lastViewedProduct))
        .catch((err) =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};
