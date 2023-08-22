const arr = [12, 123, 134, 12, 34, 64, 32, 652, 33];

// arr.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

// arr.forEach((value) => console.log(value));

// MAP

// const updatedArr = [];

// arr.forEach((ele) => {
//   const result = ele + 5;

//   updatedArr.push(result);
// });

// console.log(updatedArr);

// const updatedArr = arr.map((ele) => ele + 5);
// console.log(updatedArr);

// FILTER

const valuesMoreThan100 = arr.filter((ele) => ele % 2 === 0);
// console.log(valuesMoreThan100);

// REDUCE
const sum = arr.reduce((acc, curr) => (acc += curr), 0);
// console.log(sum);

function countOccurrence(str, target) {
  const strArr = str.split("");

  const output = strArr.reduce((acc, curr) => {}, { target, count: 0 });

  return output;
}

console.log(countOccurrence("riya", "a"));
