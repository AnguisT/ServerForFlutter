var assert = require('assert');
var request = require('request');
var supertest = require('supertest');
var app = require('./server');

describe('/', function () {
    
    test('should post user', () => {
        // var body = {
        //     "login": "Vladislav",
        //     "password": 'vladislav',
        //     "caloriesnorm": "1000",
        //     "resetcalories": 2000,
        //     "idtypeexercise": 2
        // };
        // return supertest(app.app).post('/user').send(body).then((response) => {
        //     console.log(response.body);
        //     expect(response.body).toBeTruthy();
        // });
    });
    
    test('should get user', () => {
        return supertest(app.app).get('/user/vlad').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get user', () => {
        return supertest(app.app).get('/user').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get calories', () => {
        return supertest(app.app).get('/calories/11').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get customexercise', () => {
        return supertest(app.app).get('/customexercise/3').then((response) => {
            console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get all exercise', () => {
        return supertest(app.app).get('/exercise').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get exercise', () => {
        return supertest(app.app).get('/exercise/run').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get timeday', () => {
        return supertest(app.app).get('/timeday').then((response) => {
            console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get statistics', () => {
        return supertest(app.app).get('/statistics/2017-12-01').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should get statistics', () => {
        return supertest(app.app).get('/customstatistics/2017-12-01/2017-12-04').then((response) => {
            // console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

    test('should post statistics', () => {
        return supertest(app.app).get('/customexercise/Walking/50/600/3/3').then((response) => {
            console.log(response.body);
            expect(response.body).toBeTruthy();
        });
    });

});