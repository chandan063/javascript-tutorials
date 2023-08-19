const name="ram";
const repoCount=99;

// console.log(name+repoCount+"hello");

// console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName=new String('hello-hello');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));

const newString =gameName.substring(0,2);
// console.log(newString);

const anotherString=gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne="  hello   ";
// console.log(newString);
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://hello.com/hello%02chaodhy"

console.log(url.replace('%02','-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));