function plus() {
    var res = 5+5;
    console.log('5 + 5 = ' + res);
}

function minus(a, b) {
    var res = a-b;
    console.log(a + ' - ' + b + ' = ' + res);
}

module.exports = {
    plusCalculator: plus,
    minusCalculator: minus,
}