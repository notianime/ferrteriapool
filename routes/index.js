var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ferreteria Pool' });
});
router.get('/login', (req, res)=>{
  res.render('login');
});

router.get('/tienda', (req, res)=>{
  res.render('tienda');
});

router.get('/carrito', (req, res)=>{
  res.render('carrito');
});

router.get('/nosotros', (req, res)=>{
  res.render('nosotros');
});

router.get('/contacto', (req, res)=>{
  res.render('contacto');
});

router.get('/construccion', (req, res)=>{
  res.render('construccion');
});

router.get('/admin', (req, res)=>{
  res.render('admin');
});
module.exports = router;
