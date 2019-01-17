var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/gifts", function(req, res) {
    db.Treegifts.findAll({}).then(function(dbgifts) {
      res.json(dbgifts);
    });
  });

  // Create a new example
  app.post("/api/new", function(req, res) {
    let gift = req.body;
    let routeName = gift.title.replace(/\s+/g, "").toLowerCase();
    db.Treegifts.create({
      routeName: routeName,
      title: db.Treegifts.title,
      category: db.Treegifts.category,
      description: db.Treegifts.description,
      location: db.Treegifts.location,
      image: db.Treegifts.image
    });

    res.status(204).end();
  });

  // Delete an example by id
  app.delete("/api/gifts/:id", function(req, res) {
    db.Treegifts.destroy({ where: { id: req.params.id } }).then(function(
      dbgifts
    ) {
      res.json(dbgifts);
    });
  });
};
