var app = require('./server');

app.app.listen(process.env.PORT || 3000, function () {
    console.log('Server started!')
});