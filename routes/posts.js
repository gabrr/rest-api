const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are on a new posts page');
});

router.get('/especific', (req, res) => {
    res.send('especific');
});

module.exports = router;
