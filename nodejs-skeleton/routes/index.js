const express = require('express');
const actionCreateAcces = require('../actions/createAcces');

const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  actionCreateAcces();
  // Render response
  res.render('index', { title: 'Defnode' });
});

module.exports = router;
