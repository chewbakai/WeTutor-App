const tutor = require("../models/tutorModel.js");

// Create and Save a new tutor
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a tutor
      const tutor = new tutor({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
      });
    
      // Save tutor in the database
      tutor.create(tutor, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the tutor."
          });
        else res.send(data);
      });
};

// Retrieve all tutor from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    tutor.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutor."
        });
      else res.send(data);
    });
};

// Find a single tutor with a id
exports.findOne = (req, res) => {
    tutor.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found tutor with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving tutor with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

// find all published tutor
exports.findAllPublished = (req, res) => {
    tutor.getAllPublished((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutor."
          });
        else res.send(data);
      });
};

// Update a tutor identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    tutor.updateById(
      req.params.id,
      new tutor(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found tutor with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating tutor with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};

// Delete a tutor with the specified id in the request
exports.delete = (req, res) => {
    tutor.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found tutor with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete tutor with id " + req.params.id
            });
          }
        } else res.send({ message: `tutor was deleted successfully!` });
      });
};

// Delete all tutor from the database.
exports.deleteAll = (req, res) => {
    tutor.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutor."
          });
        else res.send({ message: `All tutor were deleted successfully!` });
      });
};