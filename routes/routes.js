const express = require("express");
const router = express.Router();
const Client = require("../models/client");

//********************************************************************************************* */
//  R O U T E S _ _ F O R _ _ C L I E N T S  _ _ C O L L E C T I O N

//********************************************************************************************* */

// Get list of all clients from the database
router.get("/clients", function(req, res) {
  Client.find(req.query).then(function(client) {
    res.json(client);
  });
});

// Add a new client to the database
router.post("/clients", function(req, res, next) {
  console.log(req.body);
  Client.create(req.body)
    .then(function(client) {
      res.json(client);
    })
    .catch(next);
});

// Update a client in the database
router.get("/clients/:id", function(req, res, next) {
  Client.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(client) {
    res.json(client);
  });
});

// Update a client in the database
router.put("/clients/:id", function(req, res, next) {
  Client.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(client) {
    res.json(client);
  });
});

// Delete a client from the database
router.delete("/clients/:id", function(req, res, next) {
  Client.findByIdAndDelete({ _id: req.params.id }).then(function(client) {
    res.json(client);
  });
  res.send({ type: "DELETE" });
});



module.exports = router;