import React from "react";
import Todo from "./Todo/Todo";
import "./TodoLists.css";

const TodoLists = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  // console.log("Todolists component rendered");

  return (
    <div className="todo-container">
      {todos.length === 0 ? (
        <p className="error-msg">No Todos to show up</p>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            {...todo}
          />
        ))
      )}
    </div>
  );
  <Todo />;
};

export default TodoLists;
