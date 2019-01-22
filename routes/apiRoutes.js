var db = require("../models");

module.exports = function(app) {
  // Get all gifts

  app.get("/api/:category?", function(req, res) {
    if (req.params.category) {
      db.Treegifts.findOne({
        where: {
          category: req.params.category
        }
      }).then(function(dbgifts) {
        return res.json(dbgifts);
      });
    } else {
      db.Treegifts.findAll({}).then(function(dbgifts) {
        return res.json(dbgifts);
      });
    }
  });

  // Create a new gift
  app.post("/api/gifts", function(req, res) {
    console.log(req.body);
    var routeName = req.body.title.replace(/\s+/g, "").toLowerCase();
    db.Treegifts.create({
      routeName: routeName,
      title: req.body.title,
      category: req.body.category,
      condition: req.body.condition,
      description: req.body.description,
      location: req.body.location
    });
    res.status(204).end();
  });

  // Delete a gift by id
  app.delete("/api/gifts/:id", function(req, res) {
    db.Treegifts.destroy({ where: { id: req.params.id } }).then(function(
      dbgifts
    ) {
      res.json(dbgifts);
    });
  });
};
