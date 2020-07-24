// React Dependencies.
const express = require("express");
const router = express.Router();

// Import Model Data.
const Client = require("../models/client");

/* ******************************************************************************************************************************* */
/*      --------------------------------------- ROUTES FOR CLIENTS MODEL --------------------------------------- */
/* ******************************************************************************************************************************* */

// Get list of all clients from the database
router.get("/clients", function (req, res) {
  Client.find(req.query).then(function (client) {
    res.json(client);
  });
});

// Add a new client to the database
router.post("/clients", function (req, res, next) {
  console.log(req.body);
  Client.create(req.body)
    .then(function (client) {
      res.json(client);
    })
    .catch(next)
});

// Update a client in the database
router.get("/clients/:id", function (req, res,) {
  Client.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (client) {
    res.json(client);
  });
});

// Update a client in the database
router.put("/clients/:id", function (req, res) {
  Client.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (client) {
    res.json(client);
  });
});

// Delete a client from the database
router.delete("/clients/:id", function (req, res) {
  Client.findByIdAndDelete({ _id: req.params.id }).then(function (client) {
    res.json(client);
  });
  res.send({ type: "DELETE" });
});


// Export Component.
module.exports = router;