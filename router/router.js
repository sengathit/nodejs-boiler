const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    let title = 'Home Page';
    res.render('index',{title: title});
});

router.get('/about',(req,res) => {
    let title = 'About Page';
    res.render('about',{
        name: 'sengathit',
        title: title
    });
});

module.exports = router;