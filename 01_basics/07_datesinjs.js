let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate=new Date(2023,09,22);
let myCreatedDate1=new Date("2023-01-14");
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp=Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate,getDay()} and time`

newDate.toLocaleString('default',
{
    weekday:"long"
    
})