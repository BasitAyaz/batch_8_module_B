// ===== var,let,const =====

// === var ===
// reinitialize (y)
// redeclare (y)
// hoisting (y)
// block scoping (y)

// === let ===
// reinitialize (n)
// redeclare (y)
// hoisting (n)
// block scoping (y)

// === const ===
// reinitialize (n)
// redeclare (n)
// hoisting (n)
// block scoping (y)

// var a = "abc";

// var a = 123;

// console.log(a);

// let a = "abc";
// let a = 123;

// console.log(a);

// const a = "abc";
// const a = 123;

// console.log(a);

// var a = "abc";
// a = 123;

// console.log(a);

// let a = "abc";
// a = 123;

// console.log(a);

// const a = "abc";
// a = 132;

// console.log(a);

// abc();
// function abc() {
//   console.log("abc");
// }

// console.log(a);
// let a = "abc";

// if (true) {
//   var a = "abc";
// }

// function abc() {
//   var a = "abc";
// }
// abc();
// console.log(a);

// if (true) {
//   let a = "abc";
// }
// console.log(a);

// let firstName = "Abdul";
// let lastName = "Basit";
// let age = 12;

// // let d = c + firstName + lastName + "and my age is " + age;

// let d = `my name is ${firstName} ${lastName}, my age is ${age}`;

// console.log(d);

// let num = 20;

// let a = `the square root of ${num} is ${num * num}`;

// console.log(a);

// let a = `asdasdasd as das \n da da da  da da sda sdsa d`;

// console.log(a);

// let a = 10;
// let b = 20;

// if (a == b) {
//   console.log("Equal");
// }
// a == b ? console.log("Equal") : console.log("Not Equal");

// let age = 12;
// let studentCard = true;

// if (age >= 18) {
//   console.log("Allowed");
// } else if (studentCard) {
//   console.log("Allowed on Student Card");
// } else {
//   console.log("Not Allowed");
// }

// age >= 18
//   ? console.log("Allowed")
//   : studentCard
//   ? console.log("Allowed on Student Card")
//   : console.log("Not Allowed");

// let a;

// let feePaid = true;

// // if (feePaid) {
// //   a = "Allowed";
// // } else {
// //   a = "Not Allowed";
// // }

// a = feePaid ? "Allowed" : "Not Allowed";

// console.log(a);

// let marks = 50;

// let Grade = marks >= 60 ? "B" : "";

// console.log(Grade);

// let a = 10.1324564132746;

// a = a.toFixed(2);
// console.log(typeof a);

// let num = a * "a";
// console.log(typeof num);

let a = false;

let b = a && "";
console.log(b);
