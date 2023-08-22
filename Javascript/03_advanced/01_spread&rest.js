const sumOfNums = (...nums) => {
  return nums.reduce((acc, curr) => (acc += curr), 0);
};

// console.log(sumOfNums(12, 13));
// console.log(sumOfNums(12, 13, 5));

// rest: ...
// spread: ...

const arr1 = [12, 123, 34, 54, 64];
const arr2 = [90, 76, 54];

const arr3 = [...arr1, ...arr2];
// console.log(arr3);

const person1 = {
  name: "yashwant",
  age: 19,
  isAlive: true,
};

const person2 = {
  name: "krishna",
  age: 20,
  isAlive: true,
};

// person1.isAlive = false;

// console.log(person1);

const person3 = { ...person1, isAlive: false };
console.log(person3);
