const os = require("os");

console.log(os.uptime());
console.log(os.arch());
console.log(os.freemem() / 1024 / 1024 / 1024);
