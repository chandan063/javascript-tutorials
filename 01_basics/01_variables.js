const accountId="1234";
let accountEmail="hello@gmail.com";
var accountPassword="32412";
accountType="saving";

console.table([accountId,accountEmail,accountPassword,accountType]);
//accountId=234;//Assignment to constant variable can't change
// console.log(accountId);
let accountCity;//here it will be taken as undefined by default by js
console.log(accountCity);
/*
prefer not to use var ..only constant and let
because to avoid the issue during scope and fundamental scope
*/