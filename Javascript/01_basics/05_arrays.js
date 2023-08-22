//           0, 1, 2, 3, 4, 5, 6, 7, 8
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. length
// console.log(arr.length);

// 2. toString()
// console.log(arr.toString());

// 3. push() -> it adds the elements to an array from end and returns the new length
// console.log(arr.push(10, 11, 12));
// console.log(arr);

// 4. pop() -> it will remove the last element from an array and return it
// console.log(arr.pop());
// console.log(arr);

// 5. shift() -> it will remove the element from an array from start and return it
// console.log(arr.shift());
// console.log(arr);

// 6. unshift() -> it will add the element from start of an array and return the new length
// console.log(arr.unshift(0));
// console.log(arr);

// 7. join() -> it will join the array elements based of the identifier
const arr3 = arr.join("+");
// console.log(arr3);

// 8. concat() -> combines array and return new array without modifing existing array
const arr4 = [10, 12, 14, 54];
const concatArr = arr.concat(arr4);
// console.log("concatArr", concatArr);

// console.log("arr", arr);
// console.log("arr4", arr4);

// 9. splice(startIndex, deleteCount, ...elements)

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.splice(2, 0, "hello"));
// console.log(arr);

// 10. slice(start, end)

//  0, 1, 2, 3, 4, 5, 6, 7, 8
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.slice(2, 5));
// console.log(arr);

// 11. indexOf(element)
// console.log(arr.indexOf(-8));

// 12. includes()
// console.log(arr.includes(18));

// 13. delete()
delete arr[2];
console.log(arr);
console.log(arr[2]);
