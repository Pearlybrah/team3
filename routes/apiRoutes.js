var db = require("../models");

module.exports = function(app) {
  // Get all gifts
  app.get("/api/:gifts?", function(req, res) {
    if (req.params.gifts) {
      db.Treegifts.findOne({
        where: {
          routeName: req.params.gifts
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
    let routeName = db.Treegifts.title.replace(/\s+/g, "").toLowerCase();
    db.Treegifts.create({
      routeName: routeName,
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      image: req.body.image
    }).then(function(dbgifts) {
      res.json(dbgifts);
    });
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
