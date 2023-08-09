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
    amount: 330,
    category: "A",
    isSelected: true,
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
    amount: 430,
    category: "B",
    isSelected: true,
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
    amount: 100,
    category: "A",
    isSelected: true,
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
    amount: 75,
    category: "A",
    isSelected: true,
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
    amount: 1000,
    category: "B",
    isSelected: true,
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
// let arr2 = arr.filter((x) => x.category == "A" && !x.isApproved);

// let arr2 = arr.forEach((x, i) => {
//   let obj = { ...x };
//   obj.rollNumber = `STD-${i + 1}`;
// });

// console.log(arr2);

// let finalAmount = 0;

// arr.forEach((x) => {
//   if (x.isApproved) {
//     finalAmount += x.amount;
//   }
// });

// console.log(finalAmount);

// let arr = [
//   {
//     brand: "Samsung",
//     model: "A30",
//     price: "40000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Samsung",
//     model: "A10",
//     price: "40000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Samsung",
//     model: "A20",
//     price: "40000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Vivo",
//     model: "Y20",
//     price: "20000",
//     camera: "40px",
//     ram: "2gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Vivo",
//     model: "Y11",
//     price: "20000",
//     camera: "40px",
//     ram: "3gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Vivo",
//     model: "Y15",
//     price: "30000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "64gb",
//   },
//   {
//     brand: "Motorola",
//     model: "123",
//     price: "5000",
//     camera: "2px",
//     ram: "2gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Iphone",
//     model: "12",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Iphone",
//     model: "13",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Iphone",
//     model: "X",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
// ];

// let brandSelect = document.getElementById("company");
// let modelSelect = document.getElementById("model");

// let brands = arr.map((x) => x.brand);
// brands = [...new Set(brands)];
// console.log(brands);

// brandSelect.innerHTML += brands.map(
//   (x) => `<option value="${x}">${x}</option>`
// );

// let selectBrand = () => {
//   let selectedBrand = brandSelect.value;
//   let models = arr.filter((x) => x.brand == selectedBrand);
//   console.log(models);
//   modelSelect.innerHTML = "";
//   modelSelect.innerHTML += models.map(
//     (x) => `<option value="${x.model}">${x.model}</option>`
//   );
// };

// let tableBody = document.getElementById("tableBody");
// tableBody.innerHTML += arr.map(
//   (x) => `
// <tr>
// <td>${x.brand}</td>
// <td>${x.model}</td>
// <td>${x.camera}</td>
// <td>${x.price}</td>
// <td>${x.ram}</td>
// <td>${x.rom}</td>
// </tr>`
// );

// let brands = [];
// arr.forEach((x) => {
//   if (!brands.includes(x.brand)) {
//     brands.push(x.brand);
//   }
// });
// console.log(brands);

// let obj = arr.find((x) => x.id == 10);
// console.log(obj);

// let i = arr.findIndex((x) => x.id == 5);
// console.log(i);

// let arr2 = [[1], 2, 3, 4, [[5], [6]]];
// let arr3 = arr2.flat(Infinity);

// console.log(arr3);

// let a = Math.max(...arr3);
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6];

// let sum = arr.reduce((x, y) => {
//   console.log(x, y);
//   return x + y.amount;
// }, 0);

// console.log(sum);

// some

// let anyObjSelected = arr.some((x) => x.isSelected);
// console.log(anyObjSelected);
// some

// let everyObjSelected = arr.every((x) => x.isSelected);
// console.log(everyObjSelected);

// ==== Promise ====

// let AhmedKaRishta = new Promise((resolve, reject) => {
//   let AhmedKiJob = false;
//   let AhmedKiGari = true;
//   let AhmedKaApnaGhar = true;
//   let AhmedKiSalary = 50;

//   if (AhmedKiJob && AhmedKaApnaGhar) {
//     resolve("Ahmed ka Rishta Pakka");
//   } else if (AhmedKiSalary >= 50) {
//     // Aunty Rishta Dhoond rahi hai
//     setTimeout(() => {
//       resolve("Mil Gaya");
//     }, 5000);
//   } else {
//     reject("Agli Dhundo");
//   }
// });

// AhmedKaRishta.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
// console.log(AhmedKaRishta);

// let abc = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (a == b) {
//       setTimeout(() => {
//         resolve("Success");
//       }, 5000);
//     } else {
//       reject("Error");
//     }
//   });
// };

// let xyz = async () => {
//   await abc(10, 10)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log("XYZ");
// };

// xyz();
