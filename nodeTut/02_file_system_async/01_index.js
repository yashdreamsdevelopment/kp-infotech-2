const fs = require("fs");

// creating a file using async

// fs.writeFile(
//   "text2.txt",
//   "this is text2 file created using write file async method",
//   (err) => {
//     if (!err) {
//       console.log("FILE CREATED SUCCESSFULLY");
//     } else {
//       console.log(err);
//     }
//   }
// );

fs.appendFile("text2.txt", " this is appended data", "utf-8", (err) => {
  if (!err) {
    console.log("APPEDING OPERATION SUCCESSFUL");
  } else {
    console.log(err);
  }
});
