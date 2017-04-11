var express = require('express')
var time = require('./Time/time')
var app = express()
var router = express.Router();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
})

router.get('/time', function (req, res) {
    res.json({
        timeNow: time.ntime()
    });
});
app.use('/api', router);