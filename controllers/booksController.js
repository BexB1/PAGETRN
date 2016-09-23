var reviews = require('../data/reviews');

function reviewsIndex(req, res){
  res.render('reviews/index', { reviews: reviews });
}

function reviewsNew(req, res) {
  res.render('reviews/new');
}

function reviewsShow(req, res) {
  var id = parseInt(req.params.id);
  var book = reviews[id];
  res.render('reviews/show', { book: book });
}

function aboutUs(req, res) {
  res.render('/about');
}

function contactUs(req, res) {
  res.render('/contact');
}

function reviewsEdit(req, res) {
  var id = parseInt(req.params.id);
  res.render('reviews/edit', { book: reviews[id] });
}

function reviewsCreate(req, res){
  console.log(req.body);

  var book = req.body.review;
  book.id = reviews.length;
  reviews.push(book);

  res.redirect(302, "/reviews");
}

function reviewsUpdate(req, res) {
  var id = parseInt(req.params.id);
  var review = req.body.review;
  review.id = id;
  reviews[id] = review;
  res.redirect(302, "/reviews/"+ id);
}

function reviewsDelete(req, res){
  var id = req.params.id;
  reviews.splice(id, 1);
  reviews = reviews.map(function(book) {
    book.id--;
    return book;  
  });

  res.redirect(302, "/");
}

module.exports = {
  index: reviewsIndex,
  new: reviewsNew,
  create: reviewsCreate,
  show: reviewsShow,
  edit: reviewsEdit,
  update: reviewsUpdate,
  delete: reviewsDelete,
  about: aboutUs,
  contact: contactUs,
}