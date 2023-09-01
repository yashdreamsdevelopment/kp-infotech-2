const express = require("express");
const router = express.Router();

const {
  getAllTodos,
  getSpecificTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

router.route("/").get(getAllTodos).post(addTodo);

router.route("/:id").get(getSpecificTodo).delete(deleteTodo).patch(updateTodo);

module.exports = router;
