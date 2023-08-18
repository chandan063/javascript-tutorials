//  Primitive

// 7 categories
// string,Number , Boolean, null , undefined, Symbol, BigInt

const score=200;
const scoreValue=200.44;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;//undefined

const id=Symbol('123')
const anotherId=Symbol('123');
console.log(id==anotherId);//false

const bigNumber=5584895658845565n;
// represent n at the last for bigNumber


// Reference Type/ Non-primitive
// Arrays, objects, Functions 

let heros=["saktiman","nobinda","dokha"];
let myObj={
    name:"ram",
    age:99,
}

const myFunction=function(){
    console.log("hello world");
}
myFunction();

console.log(typeof bigNumber);//bigint
console.log(typeof myFunction);//function
console.log(typeof id);//symbol
