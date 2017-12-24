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

app.get('/user/:login', function(req, res) {
    db.getuserbylogin(req.params.login).then((val) => {
        res.json(val);
    });
});

app.get('/user', function(req, res) {
    db.getallusers().then((val) => {
        res.json(val);
    });
});

app.get('/typeexercise', function(req, res) {
    db.getalltypeexercise().then((val) => {
        res.json(val);
    });
});

app.get('/calories/:idstatistics', function(req, res) {
    db.getcaloriesbyidstatistics(req.params.idstatistics).then((val) => {
        res.json(val);
    });
});

app.get('/customexercise/:iduser', function(req, res) {
    db.getallcustomexercise(req.params.iduser).then((val) => {
        res.json(val);
    });
});

app.get('/timeday', function(req, res) {
    db.getalltimeday().then((val) => {
        res.json(val);
    });
});

app.get('/exercise', function(req, res) {
    db.getallexercise().then((val) => {
        res.json(val);
    });
});

app.get('/exercise/:name', function(req, res) {
    db.getexercisebyname(req.params.name).then((val) => {
        res.json(val);
    });
});

app.get('/statistics/:date', function(req, res) {
    db.getstatisticsbydate(req.params.date).then((val) => {
        res.json(val);
    });
});

app.get('/statistics/:datefrom/:dateto', function(req, res) {
    db.getstatisticsbycustomdate(req.params.datefrom, req.params.dateto).then((val) => {
        res.json(val);
    });
});

app.get('/newuser/:login/:password/:caloriesnorm/:resetcalories/:idtypeexercise', function(req, res) {
    var user = {
        login: req.params.login,
        password: req.params.password,
        caloriesnorm: req.params.caloriesnorm,
        resetcalories: req.params.resetcalories,
        idtypeexercise: req.params.idtypeexercise,
    };
    db.newuser(user).then((data) => {
        res.json(data);
    });
});

app.post('/statistics', function(req, res) {
    var statistics = req.body;
    db.addstatistics(statistics).then((data) => {
        res.json(data);
    })
});

app.post('/calories', function(req, res) {
    var calories = req.body;
    db.addcalories(calories).then((data) => {
        res.json(data);
    })
});

app.get('/customexercise/:name/:minutes/:calories/:iduser/:timedayid', function(req, res) {
    var customexercise = {
        customexercisename: req.params.name,
        customexerciseminutes: req.params.minutes,
        customexercisecalories: req.params.calories,
        iduser: req.params.iduser,
        timedayid: req.params.timedayid,
    };
    console.log(customexercise);
    db.addcustomexercise(customexercise).then((data) => {
        res.json(data);
    })
});

app.get('/timeday/:name', function(req, res) {
    var name = req.params.name;
    db.addtimeday(name).then((data) => {
        res.json(data);
    })
});

app.get('/usertypeexercise/:idtypeexercise/:userid', function(req, res) {
    var user = {
        idtypeexercise: req.params.idtypeexercise,
        userid: req.params.userid,
    };
    db.updateidtypeexerciseuser(user).then((data) => {
        res.json(data);
    })
});

app.get('/usercaloriesnorm/:caloriesnorm/:userid', function(req, res) {
    var user = {
        caloriesnorm: req.params.caloriesnorm,
        userid: req.params.userid,
    };
    db.updateidtypeexerciseuser(user).then((data) => {
        res.json(data);
    })
});

app.get('/userresetcalories/:resetcalories/:userid', function(req, res) {
    var user = {
        resetcalories: req.params.resetcalories,
        userid: req.params.userid,
    };
    db.updateidtypeexerciseuser(user).then((data) => {
        res.json(data);
    })
});

module.exports = {
    app: app,
};
