var moment = require('moment');

function getNowTime() {
    return moment().format();
}

module.exports = {
    ntime: getNowTime,
}