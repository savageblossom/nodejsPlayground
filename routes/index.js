var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'home-page' });
});
router.get('/features', function(req, res, next) {
  res.render('pages/features', { title: 'features' });
});
router.get('/something', function(req, res, next) {
  res.render('pages/something', { title: 'something' });
});
router.get('/elem_one', function(req, res, next) {
  res.render('pages/elem_one', { title: 'element #1' });
});
router.get('/elem_two', function(req, res, next) {
  res.render('pages/elem_two', { title: 'element #2' });
});

module.exports = router;
