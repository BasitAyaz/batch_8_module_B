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

// let a = false;

// let b = a && "ABC";
// let c = a && "ABC";
// let c = a || "ABC";

// console.log(c);

// let obj = {
//   name: "ABC",
//   age: 18,
// };

// let obj1 = { ...obj };

// obj1.name = "XYZ";

// console.log(obj);
// console.log(obj1);

// let a = "abc";
// let b = a;

// b = 123;

// console.log(a);
// let obj = {
//   name: "ABC",
//   age: 18,
// };

// let obj1 = {
//   ...obj,
//   name: "SAIMS",
// };

// console.log(obj1);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let arr1 = [...arr];
// console.log(arr1);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr[1] = 5;

// console.log(arr);

// let a = "ABC";

// a = 123;

// let a = 123;
// a = 321;

// console.log(a);

// let a = [1, 2, 3, 4];

// a[1] = "a";

// console.log(a);

// let obj = {
//   id: 1,
//   name: "abc",
// };

// obj.name = "xyz";

// spread Operator array
// spread Operator object
// Circuits

// function abc(...a) {
//   console.log(a);
// }
// abc("ABC", "KJL", "MNO", "XYZ");

// let obj = {
//   id: 1,
//   name: "ABC",
//   address: {
//     street: "ABC Street",
//     city: "Karachi",
//     country: "Pakistan",
//     coOrdinates: {
//       logitude: 13243,
//       latitude: 132412,
//     },
//   },
// };

// let { id, name, address } = obj;
// let { street, city, country, coOrdinates } = obj.address;

// console.log(name, city);

// let city = obj.address.city;
// let country = obj.address.country;
// let street = obj.address.street;

// let arr = [1, 2, 3, ["A", "B", "C", [true, false]]];

// let [val, a2, , val4] = arr;

// let [a1] = arr[3][3];

// console.log(a1);

// let obj = {
//   id: 1,
//   name: "ABC",
//   age: 18,
// };

// let allKeys = Object.keys(obj);
// let allValues = Object.values(obj);
// let allEntries = Object.entries(obj);
// Object.freeze(obj);

// obj.name = "XYZ";

// console.log(allKeys);
// console.log(allValues);
// console.log(allEntries);
// console.log(obj);

// =========== Functions ===========

// function abc(a) {
//   console.log(a);
// }

// function xyz() {
//   return "xyz";
// }

// abc(xyz());

// function abc() {
//   console.log("ABC");
//   let a  = "abc"
//   function cb () {
//     console.log("XYZ");
//     console.log(a)
//   };
// }

// abc()();

// ===== lexical scoping =========

// let a = true;

// function abc() {
//   let a = 123;
//   if (true) {
//     console.log(a);
//   }
// }
// abc();

// =========== Default Perameter ============

// function abc(a = 10) {
//   let b = 326 - a;
//   console.log(b);
// }
// abc(20);
// abc(40);
// abc(60);
// abc();

// let abc = () => {
//   console.log("ABC");
// };

// let abc = (a) => {
//   console.log(a);
// };

// let abc = (a, b) => {
//   console.log(a + b);
// };

// let abc = a => {
//   console.log(a);
// };
// abc(10);

// let abc = a=>{
//   return "ABC"
// }

// let b = abc()

// console.log(b)

// let obj = {
//   id:1,
//   name:'BAC',
//   age:18
// }

// let abc = a => {id : obj.id}
// let abc = a => ({id : obj.id})

// let b = abc()

// console.log(b)

let arr = [
  {
    id: 1,
    name: "ABC",
    isApproved: true,
    address: {
      street: "ABC Street",
      city: "Karachi",
      country: "PK",
    },
  },
  {
    id: 2,
    name: "JKL",
    isApproved: true,
    address: {
      street: "ABC Street",
      city: "Karachi",
      country: "PK",
    },
  },
  {
    id: 3,
    name: "MNO",
    isApproved: false,
    address: {
      street: "ABC Street",
      city: "Karachi",
      country: "PK",
    },
  },
  {
    id: 4,
    name: "TUY",
    isApproved: true,
    address: {
      street: "ABC Street",
      city: "Karachi",
      country: "PK",
    },
  },
  {
    id: 5,
    name: "XYZ",
    isApproved: false,
    address: {
      street: "ABC Street",
      city: "Karachi",
      country: "PK",
    },
  },
];

// ============ Array Functions =============

// Map

// let arr2 = arr.map((x,i,list) => {
//   return x.address
// });
// console.log(arr2);

// filter

// let arr2 = arr.map((x) => x.isApproved);
let arr2 = arr.filter((x) => x.isApproved).map((x) => x.address);

// let arr2 = arr.forEach((x, i) => {
//   let obj = { ...x };
//   obj.rollNumber = `STD-${i + 1}`;
// });

console.log(arr3);
