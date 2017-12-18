var pg = require('pg-promise')();
const connect = {
    host: 'ec2-54-163-233-103.compute-1.amazonaws.com',
    port: 5432,
    database: 'dfpapgvarom7lo',
    user: 'fcaziullbljjhz',
    password: 'e6b5ee4a6939760d345d813ff48bb1b7cc70f77eff6c8d842df6deca0cf7bfc0',
    ssl: true,
};

var db = pg(connect);

function getUser(login) {
    return db.any("select * from public.user where login='" + login + "'")
    .then((val) => {
        return val;
    });
}

module.exports = {
    getuser: getUser,
};
