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

function getAllUsers() {
    return db.any("select * from public.user")
    .then((val) => {
        return val;
    });
}

function getUserByLogin(login) {
    return db.any(`select * from public.user where login='${login}'`)
    .then((val) => {
        return val;
    });
}

function getAllTypeExercise() {
    return db.any('select * from public.typeexercise')
    .then((val) => {
        return val;
    });
}

function getCaloriesByIdStatistics(idstatistics) {
    return db.any(`select * from public.calories where idstatistics=${idstatistics}`);
}

function getAllCustomExercise(iduser) {
    return db.any(`select * from public.customexercise where iduser=${iduser}`);
}

function getAllTimeDay() {
    return db.any('select * from public.timeday');
}

function getAllExercise() {
    return db.any('select * from public.exercise');    
}

function getExerciseByName(name) {
    return db.any(`select * from public.exercise where exercisename ILIKE '%${name}%'`);
}

function getStatisticsByDate(datetime) {
    return db.any(`select * from public.statistics where datetime='${datetime}'`);
}

function getStatisticsByCustomDate(datefrom, dateto) {
    return db.any(`select * from public.statistics where datetime between '${datefrom}' and '${dateto}'`);
}

function newUser(user) {
    return db.any(`INSERT INTO public.user(login, password, caloriesnorm, resetcalories, idtypeexercise) VALUES ('${user.login}', '${user.password}', ${user.caloriesnorm}, ${user.resetcalories}, ${user.idtypeexercise})`)
    .then((val) => {
        return getUserByLogin(user.login);
    });
}

function addStatistics(statistics) {
    return db.any(`INSERT INTO public.statistics(datetime, iduser) VALUES ('${statistics.datetime}', ${statistics.iduser})`)
    .then((val) => {
        return val;
    });
}

function addCalories(calories) {
    return db.any(`INSERT INTO public.calories(caloriescount, idstatistics) VALUES (${calories.caloriescount}, ${calories.idstatistics})`)
    .then((val) => {
        return val;
    });
}

function addCustomExercise(customexercise) {
    return db.any(`INSERT INTO public.customexercise(
                        customexercisename,
                        customexerciseminutes,
                        customexercisecalories,
                        iduser,
                        timedayid
                    ) VALUES (
                        '${customexercise.customexercisename}',
                        ${customexercise.customexerciseminutes},
                        ${customexercise.customexercisecalories},
                        ${customexercise.iduser},
                        ${customexercise.timedayid}
                    )`)
    .then((val) => {
        return val;
    });
}

function addTimeDay(timeday) {
    return db.any(`INSERT INTO public.timeday(timeday) VALUES ('${timeday}')`)
    .then((val) => {
        return val;
    });
}

module.exports = {
    getallusers: getAllUsers,
    getuserbylogin: getUserByLogin,
    getcaloriesbyidstatistics: getCaloriesByIdStatistics,
    getallcustomexercise: getAllCustomExercise,
    getallexercise: getAllExercise,
    getexercisebyname: getExerciseByName,
    getstatisticsbydate: getStatisticsByDate,
    getstatisticsbycustomdate: getStatisticsByCustomDate,
    getalltypeexercise: getAllTypeExercise,
    getalltimeday: getAllTimeDay,
    newuser: newUser,
    addcalories: addCalories,
    addstatistics: addStatistics,
    addcustomexercise: addCustomExercise,
    addtimeday: addTimeDay,
};
