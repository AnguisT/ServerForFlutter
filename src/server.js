var express = require('express')
var app = express()
var router = express.Router();
var db = require('./db.js');
var bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
    main();
})

router.get('/user/:login', function (req, res) {
    db.getuser(req.params.login).then((val) => {
        res.json(val);
    });
});
app.use('/api', router);

function main() {
    db.getuser('Vlad').then((val) => {
        console.log(val);
    });
}