const Excursion = require("../models/Excursion");

exports.getExcursions = (req, res, next) => {
  Excursion.find()
    .then(excursions => res.status(200).json(excursions))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
