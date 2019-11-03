const db = require("../models");

// Defining methods for the booksController
module.exports = {
  create: function(req, res) {
    console.log("Going to create")
    db.ManifestoItemsHeader.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    console.log("Going to get all")
    db.ManifestoItemsHeader.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
