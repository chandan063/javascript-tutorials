const score=400;

const balance =new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=123.566;
// precision value means round off upto given number
console.log(otherNumber.toPrecision(3));

// const hundreds=100000;

// toLocaleString() is used for counting numbers or giving commas.
// if you give it in default value it will retun in american standards. 100,000

// console.log(hundreds.toLocaleString());

// for india conversion do the below 1,00,000

// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.46));
// console.log(Math.ceil(4.66));
// console.log(Math.floor(4.96));
// console.log(Math.min(4,6));
// console.log(Math.max(4,6,5,8));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)