const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const nasaController = require('../controllers/nasa.controller');

router.get('/', async function(req, res) {
  nasaController.getIndex(req, res);
});

router.get('/apod', async function(req, res) {    
    nasaController.getPictureOfTheDate(req, res);
});

router.get('/mars', async function(req, res) {    
  nasaController.getMarsPicture(req, res);
});

module.exports = router;