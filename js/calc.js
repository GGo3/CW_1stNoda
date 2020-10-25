const myArr = require('./model');

const owerweight = myArr.filter(person => Number(person.mass) > 100);
const presonNames = owerweight.map(item => {return item.name});

module.exports = presonNames;