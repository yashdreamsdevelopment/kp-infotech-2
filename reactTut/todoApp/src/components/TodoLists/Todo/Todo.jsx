import React, { useState } from "react";
import Button from "../../Button/Button";

const Todo = ({ id, title, handleDeleteTodo, handleEditTodo }) => {
  // console.log("Todo component rendered ");

  return (
    <div className={`todo-item `}>
      <h2>{title}</h2>

      <div className="todo-actions">
        <Button onClick={() => handleEditTodo(id)}>Edit</Button>
        <Button onClick={() => handleDeleteTodo(id)}>Delete</Button>
      </div>
    </div>
  );
};

export default Todo;
