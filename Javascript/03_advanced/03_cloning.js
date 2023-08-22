const yashwantFriendList = [
  { name: "Kishen", age: 19 },
  { name: "abhishek", age: 20 },
];

const krishnaFriendList = [...yashwantFriendList, { name: "varad", age: 21 }];

console.log(yashwantFriendList);
console.log(krishnaFriendList);

yashwantFriendList[0].name = "kishen_31";
const deletedFriend = yashwantFriendList.splice(0, 1);
console.log(deletedFriend);

// console.log(yashwantFriendList);

console.log(yashwantFriendList);
console.log(krishnaFriendList);
