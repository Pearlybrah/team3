var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Treegifts.findAll({}).then(function(dbgifts) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbgifts
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/treegifts/:id", function(req, res) {
    db.Treegifts.findOne({ where: { id: req.params.id } }).then(function(dbgifts) {
      res.render("example", {
        example: dbgifts
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
