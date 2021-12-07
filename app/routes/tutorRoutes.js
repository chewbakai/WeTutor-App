const express = require("express");
const path = require('path');
const tutor = require("../controllers/tutorController");

const router = express.Router();
    // Create a new Tutorial
    router.post("/", tutor.create);
    // Retrieve all Tutorials
    router.get("/", tutor.findAll);
    // Retrieve all published Tutorials
    router.get("/published", tutor.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutor.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutor.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutor.delete);
    // Delete all Tutorials
    router.delete("/", tutor.deleteAll);
  
    module.exports = router;