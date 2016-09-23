var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');


// root path
router.get("/", function (req, res) {
  res.redirect(302, "/reviews")
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/contact', function(req, res) {
    res.render('contact');
});

// RESTful routes
router.route("/reviews")
  .get(booksController.index)
  .post(booksController.create);

router.get("/reviews/new", booksController.new);

router.route("/reviews/:id")
  .get(booksController.show)
  .put(booksController.update)
  .delete(booksController.delete);

router.get("/reviews/:id/edit", booksController.edit);

module.exports = router;