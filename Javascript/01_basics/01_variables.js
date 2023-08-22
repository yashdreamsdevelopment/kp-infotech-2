// console.log(name);
// const name = "abd";

// Primitives

// 1. String
let name = "Yashwant";
console.log(name, typeof name);

// 2. Number
let age = 22;
console.log(age, typeof age);

// 3. Boolean (true - 1-* / false - 0)
let isAlive = true;
console.log(isAlive, typeof isAlive);

// 4. Null
let bankBalance = null;
console.log(bankBalance, typeof bankBalance);

// 5. Undefined
let mobileNo = undefined;
console.log(mobileNo, typeof mobileNo);

// NON-PRIMITIVE

// 1. Arrays:
const marks = [12, 45, "hello", 34, 90];

console.log(marks, typeof marks);
// int[] marks = new int[12,"hello",34,34]

// 2. Functions:
function sayHello() {
  console.log("hello");
}
sayHello();
console.log(typeof sayHello);

// 3. Objects:
const person = {
  fName: "yashwant",
  lName: "mangate",
  age: 33,
  isAlive: true,
  skills: ["html", "css"],
};

console.log(person, typeof person);

// 4. Date
const date = new Date().getDate();
console.log(date, typeof date);

const yashwant = {
  fName: "yashwant",
  lName: "mangate",
  age: 22,
  isAlive: false,
  skills: ["frontend", "backend"],
  role: "admin",
  address: {
    street: "High Street",
    city: "Aurangabad",
    "pin Code": 431001,
    state: "MH",
  },
};

console.log(yashwant["address"]["pin Code"]);
