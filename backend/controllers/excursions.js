const Excursion = require("../models/Excursion");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.getExcursions = (req, res, next) => {
  Excursion.find()
    .then(excursions => res.status(200).json(excursions))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.reserveExcursion = (req, res, next) => {

  Excursion.findOne({ title: req.params.title })
    .then(excursion => {
      if (!excursion) {
        return res
          .status(400)
          .json({
            message: `Excursion with title "${req.params.title}" is not found.`
          });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedReservation = queryCreator(initialQuery);
        const {title, ...reservation} = updatedReservation;

        Excursion.findOneAndUpdate(
          { title: req.params.title },
          { $push: { reservations: { $each: [reservation] } } },
          { new: true }
        )
          .then(excursion => res.json(excursion))
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
