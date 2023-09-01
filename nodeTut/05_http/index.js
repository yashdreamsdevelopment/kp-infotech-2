const http = require("http");
const path = require("path");
const url = require("url");

const instaDB = {
  yashwant: 34,
  vijay: 974,
};

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  res.writeHead(200, "OK", {
    "content-type": "text/html",
  });

  if (pathname === "/") {
    res.write("<h1>Hello from home</h1>");
  } else if (pathname === "/about.html") {
    res.write("<h1>Hello from About</h1>");
  } else if (pathname === "/contact.html") {
    res.write("<h1>Hello from Contact page</h1>");
  } else if (pathname === "/instagram") {
    const { username } = query;

    const followers = instaDB[username];
    res.writeHead(200, "OK", {
      "content-type": "application/json",
    });
    res.end({ username, followers });
  } else {
    res.writeHead(404, "NOT-FOUND", {
      "content-type": "text/html",
    });
    res.write("<h1>404, Page Not Found</h1>");
  }
  res.end();
});

server.listen(5000, "localhost", () => {
  console.log("server in listeing at port: 5000");
});
