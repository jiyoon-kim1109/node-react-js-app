const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "dsdsd",
        "msg": "This is msg",
        "username": "Dsdsdsdsdsdsd"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('N/A');
});

module.exports = router;