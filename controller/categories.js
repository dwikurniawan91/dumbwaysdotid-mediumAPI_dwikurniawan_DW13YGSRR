const Category = require("../models").categories;
exports.index = (req, res) => {
  Category.findAll({ attributes: ["id", "name"] }).then(categories =>
    res.send(categories)
  );
};
exports.show = (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    attributes: ["id", "name"]
  }).then(categories => res.send(categories));
};

exports.store = (req, res) => {};
exports.update = (req, res) => {};
exports.delete = (req, res) => {};
