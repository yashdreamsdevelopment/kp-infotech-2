const fs = require("fs");

// creating a new file
// fs.writeFileSync("text.txt", "this is my first nodejs module");
// fs.writeFileSync("text.txt", "adsfsafd");
// fs.writeFileSync("bio.txt", "this is yashwant here");

// fs.appendFileSync(
//   "text.txt",
//   "this is using append file sync module function",
//   { encoding: "utf-8", flag: "a" }
// );

// fs.renameSync("text.txt", "text1.txt");

// playing with folders
// fs.mkdirSync("yashwant/child", { recursive: true });

fs.rmdirSync("yashwant", { recursive: true });
