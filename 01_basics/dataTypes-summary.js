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

// stack(primitive), Heap(Non-Primitive)

// In stack - a copy is passed to another variable so if we change in that value it will not effect the original one as shown below
let myCurrent="current";
let another=myCurrent;

console.log(myCurrent);//current
console.log(another);//current
another="cuury";
console.log(myCurrent);//current
console.log(another);//curry


// heap - referance is given so if you change value at one place other will also be changed as shown below.
let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1;
user2.email="user2@google.com"
console.log(user1);

let user3=user1;
user3.upi:"user3@google.com";
console.log(user3);
