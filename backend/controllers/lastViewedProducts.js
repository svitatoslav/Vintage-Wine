const LastViewedProduct = require('../models/LastViewedProduct');
const Product = require('../models/Product');
const _ = require('lodash');
const queryCreator = require('../commonHelpers/queryCreator');
const uniqueRandom = require('unique-random');
const rand = uniqueRandom(0, 999999);

exports.getLastViewedProducts = async (req, res, next) => {
    try {
        const lastViewedProducts = await LastViewedProduct.find();
        const productIds = lastViewedProducts.map((product) => product.productId);
        const products = await Product.find({ _id: { $in: productIds } }).lean();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({
            message: `Error happened on server: "${err}" `
        });
    }
};

exports.addLastViewedProduct = async (req, res, next) => {
    const lastViewedProductFields = _.cloneDeep(req.body);
    lastViewedProductFields.itemNo = rand();

    try {
        if (lastViewedProductFields.productId) {
            const count = await LastViewedProduct.countDocuments();
            if (count >= 5) {
                const oldestProduct = await LastViewedProduct.findOne({}, { sort: { _id: 1 } });
                await oldestProduct.remove();
            }
            LastViewedProduct.findOne({ productId : lastViewedProductFields.productId }).then((product) => {
                if (product) {
                    return res.status(400).json({
                        message: `Product with id "${lastViewedProductFields.productId}" was added.`
                    });
                } else {
                    const updatedLastViewedProduct = queryCreator(lastViewedProductFields);
                    const newLastViewedProduct = new LastViewedProduct(updatedLastViewedProduct);

                    newLastViewedProduct
                        .save()
                        .then((lastViewedProduct) => res.json(lastViewedProduct))
                        .catch((err) =>
                            res.status(400).json({
                                message: `Error occurred on the server: "${err}" `
                            })
                        );
                }
            });
        }
    } catch (err) {
        res.status(400).json({
            message: `Error occurred on the server: "${err}" `
        });
    }
};
