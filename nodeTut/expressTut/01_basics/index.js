const express = require("express");
const app = express();

const todoRouter = require("./routes/todos.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/todo", todoRouter);

app.listen(5000, () => console.log("Server in listening at PORT: 5000"));
