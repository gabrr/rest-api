const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('We are on a new posts page');
})

module.exports = router;
