const greet = (callbackFn) => {
  callbackFn();
};

const greetHR = () => {
  console.log("Hello, HR");
};

const greetEmployee = () => {
  console.log("Hello, Employee");
};

const role = "Emplu";

// if (role === "HR") {
//   greet(greetHR);
// } else {
//   greet(greetEmployee);
// }

// [1, 2, 4, 5, 6]; => [2,3,5,6,7] => n => n+1

const modifyArr = (array, modifierFn) => {
  const resultArr = [];

  for (let index = 0; index < array.length; index++) {
    const ele = array[index];

    const value = modifierFn(ele, index);

    resultArr.push(value);
  }

  return resultArr;
};

// console.log(modifyArr([2, 5, 7, 8, 9], (n) => n + 1));
// console.log(modifyArr([2, 5, 7, 8, 9], (n) => n.toString()));
// console.log(modifyArr([2, 5, 7, 8, 9], (n, i) => n ** (n + i)));

const computers = [
  { ram: "12GB", make: "dell" },
  { ram: "16GB", make: "lenovo" },
  { ram: "12GB", make: "HP" },
  { ram: "8GB", make: "lenovo" },
  { ram: "4GB", make: "asus" },
  { ram: "2GB", make: "lenovo" },
];

const allHP = computers.filter((device) => device.make === "HP");
console.log(allHP);

const FN = (c) => c.make === "lenovo";

const filterArray = (array, predicateFn) => {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    const ele = array[index];

    if (predicateFn(ele)) filteredArray.push(ele);
  }

  return filteredArray;
};

const allLenovos = filterArray(computers, FN);

console.log(allLenovos);
