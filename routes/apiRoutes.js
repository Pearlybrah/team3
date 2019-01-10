var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/treegifts", function(req, res) {
    db.Treegifts.findAll({}).then(function(dbgifts) {
      res.json(dbgifts);
    });
  });

  // Create a new example
  app.post("/api/treegifts", function(req, res) {
    db.Treegifts.create(req.body).then(function(dbgifts) {
      res.json(dbgifts);
    });
  });

  // Delete an example by id
  app.delete("/api/treegifts/:id", function(req, res) {
    db.Treegifts.destroy({ where: { id: req.params.id } }).then(function(dbgifts) {
      res.json(dbgifts);
    });
  });
};
