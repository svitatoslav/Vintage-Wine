const Excursion = require("../models/Excursion");
const queryCreator = require("../commonHelpers/queryCreator");
const sendMail = require("../commonHelpers/mailSender");
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

        const subscriberMail = req.body.email;
        const letterSubject = req.body.letterSubject;
        const letterHtml = req.body.letterHtml;

        if (!letterSubject) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
          });
        }
  
        if (!letterHtml) {
          return res.status(400).json({
            message:
              "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
          });
        }

        Excursion.findOneAndUpdate(
          { title: req.params.title },
          { $push: { reservations: { $each: [reservation] } } },
          { new: true }
        )
          .then(async excursion => {
            const mailResult = await sendMail(
              subscriberMail,
              letterSubject,
              letterHtml,
              res
            );
  
            res.json({ excursion, mailResult });
          })
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

exports.addExcursion = (req, res, next) => {
  const excursionFields = _.cloneDeep(req.body);

  // productFields.itemNo = rand();

  // try {
  //   productFields.name = productFields.name
  //     .toLowerCase()
  //     .trim()
  //     .replace(/\s\s+/g, " ");

  //   // const imageUrls = req.body.previewImages.map(img => {
  //   //   return `/img/products/${productFields.itemNo}/${img.name}`;
  //   // });

  //   // productFields.imageUrls = _.cloneDeep(imageUrls);
  // } catch (err) {
  //   res.status(400).json({
  //     message: `Error happened on server: "${err}" `
  //   });
  // }

  const updatedExcursion = queryCreator(excursionFields);

  const newExcursion = new Excursion(updatedExcursion);

  newExcursion
    .save()
    .then(excursion => res.json(excursion))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
