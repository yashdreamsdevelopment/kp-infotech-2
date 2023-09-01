let todos = require("../todos");
const uuid = require("uuid").v4;

const getAllTodos = (req, res) => {
  res.status(200).send({
    success: true,
    data: todos,
    msg: "sagle bhetle bhai",
    results: todos.length,
  });
};

const getSpecificTodo = (req, res) => {
  const { id } = req.params;

  const indexOfTodo = todos.findIndex((todo) => todo.id === id);

  if (indexOfTodo === -1) {
    res
      .status(404)
      .json({ success: false, msg: `todo with id: ${id} not found` });
  }

  const todo = todos[indexOfTodo];

  res
    .status(200)
    .json({ success: true, msg: "todo retrived successfully", data: todo });
};

const addTodo = (req, res) => {
  const { title, description } = req.body;

  const todo = {
    id: uuid(),
    title,
    description,
  };

  todos = [...todos, todo];

  res
    .status(201)
    .json({ success: true, msg: "Todo added successfully", data: todo });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, title, description };
    }
    return todo;
  });

  todos = updatedTodos;

  res.status(200).json({ success: true, msg: "Todo updated successfully" });
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  const filterdTodo = todos.filter((todo) => todo.id !== id);

  todos = filterdTodo;

  res.status(200).json({ success: true, msg: "todo deleted successfully" });
};

module.exports = {
  getAllTodos,
  getSpecificTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
