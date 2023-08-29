const calaulator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const addEx = calaulator.add(5, 10);
const minusEx = calaulator.minus(5, 10);
const timesEx = calaulator.times(5, 10);
const divideEx = calaulator.divide(5, 10);
const powerEx = calaulator.power(5, 10);

console.log(addEx, minusEx, timesEx, divideEx, powerEx);

const sth = calaulator.power(2, 3);
const xtf = calaulator.times(sth, 5);
console.log(xtf);
