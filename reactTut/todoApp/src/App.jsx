import { useReducer, useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TodoLists from "./components/TodoLists/TodoLists";
// import {
//   onChangeHandler,
//   handleEditTodoViaDispatch,
//   handleDeleteTodoViaDispatch,
//   handleAddTodoViaDispatch,
// } from "./app.backend";
import todoReducer from "./reducers/todoReducer";

function App() {
  // console.log("APP component rendered");

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const [todosState, dispatch] = useReducer(todoReducer, []);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleAddTodoViaDispatch = () => {
    const todo = {
      title: text,
      id: todoToEdit?.id || Date.now(),
    };

    if (!todoToEdit) {
      dispatch({ type: ADD_TODO, payload: todo });
    } else {
      dispatch({ type: EDIT_TODO, payload: todo });
    }

    if (setIsEditing) setIsEditing(!setIsEditing);
    setText("");
    setTodoToEdit(null);
  };

  const handleDeleteTodoViaDispatch = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });

    if (text) setText("");
  };

  const handleEditTodoViaDispatch = (id) => {
    setIsEditing(!isEditing);
    const todo = todosState.find((todo) => todo.id === id);

    setTodoToEdit(todo);
    setText(todo.title);
  };

  const fetchTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const { ok, status } = response;

    if (ok === true && status === 200) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

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
