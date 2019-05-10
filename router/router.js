let express = require('express');
let router = express.Router();

router.get('/',(req,res) => {
    res.send('hey earth');
});

router.get('/about',(req,res) => {
    res.send('about me');
})

module.exports = router;