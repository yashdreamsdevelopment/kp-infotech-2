// const person = {
//   name: "yashwant",
//   age: 23,
//   skills: ["html", "css"],
//   address: {
//     pinCode: 431002,
//     state: "MH",
//     city: "AU",
//   },
//   isAlive: false,
//   key: "yes",
// };

// person.isAbleToDance = true;
// person.lName = null;

// const searchKey = "lName";

// if (searchKey in person) {
//   console.log(person[searchKey]);
// } else {
//   console.log("No such key");
// }

// delete person.lName;
// console.log(person);

const user = {
  username: "yash",
  email: "yash.mangate1@gmail.com",
  password: "pass@12323123213",
};

function signUp(user) {
  const res = user;
  delete res.password;

  res.isLoggedIn = true;
  res.token = "asdfsaoiewyrewrwqerrdsfsa!@!#!";

  return res;
}

const userInfo = signUp(user);
console.log(userInfo);

console.log("original user:", user);
