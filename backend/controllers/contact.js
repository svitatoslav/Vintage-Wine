const Contact = require('../models/Contact');
const _ = require("lodash");

exports.leaveContact = (req, res, next) => {
    const fields = _.cloneDeep(req.body);

    const contactData = new Contact(fields)
    contactData
        .save()
        .then(product => res.json(product))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
}