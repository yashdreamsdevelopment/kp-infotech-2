// 1. factorial of a number

// 5! = 5*4*3*2*1 = 120

// let n = 5;

// let fact = 1;

// while (n > 0) {
//   fact *= n;
//   n--;
// }

// console.log(fact);

// 2. Even Odd from an array
// const arr = [13, 43, 23, 23, 43, 765, 23, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenArr = [];
// const oddArr = [];

// arr.forEach((ele) => {
//   if (ele % 2 === 0) {
//     evenArr.push(ele);
//   } else {
//     oddArr.push(ele);
//   }
// });

// console.log(evenArr);
// console.log(oddArr);

// 3. Fibo series

// 0 1 1 2 3 5 8 13 21 ......
// let a = 0;
// let b = 1;

// let count = 2;

// const target = 10;
// console.log(a);
// console.log(b);
// while (count <= target) {
//   const temp = a + b;
//   a = b;
//   b = temp;

//   console.log(b);

//   count++;
// }

// Q. Count the occurrences of letter in the given str
const str = "hello";
const target = "l";

function countOccurrences(str, target) {
  let count = 0;

  if (str.length === 0) return count;

  for (const letter of str) {
    if (letter === target) {
      count++;
    }
  }

  return count;
}
console.log(countOccurrences(str, target));

function letterOccurrences(str) {
  const counter = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);

    if (letter in counter) {
      counter[letter] = ++counter[letter];
    } else {
      counter[letter] = 1;
    }
  }

  return counter;
}

console.log(letterOccurrences(str));
