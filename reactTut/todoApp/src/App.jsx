import { useReducer, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TodoLists from "./components/TodoLists/TodoLists";
import {
  onChangeHandler,
  handleEditTodoViaDispatch,
  handleDeleteTodoViaDispatch,
  handleAddTodoViaDispatch,
} from "./app.backend";
import todoReducer from "./reducers/todoReducer";

function App() {
  // console.log("APP component rendered");

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const [todosState, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <h1>Easy to Manage Todos</h1>

      <div className="input-group">
        <Input
          type="text"
          text={text}
          placeholder="eg. order protein"
          onChangeHandler={onChangeHandler}
        />
        <Button onClick={handleAddTodoViaDispatch}>
          {isEditing ? "Edit" : "Add"}
        </Button>
      </div>

      <TodoLists
        todos={todosState}
        handleDeleteTodo={handleDeleteTodoViaDispatch}
        handleEditTodo={handleEditTodoViaDispatch}
      />
    </>
  );
}

export default App;
