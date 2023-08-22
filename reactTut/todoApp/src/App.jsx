import { useReducer, useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TodoLists from "./components/TodoLists/TodoLists";

function App() {
  // console.log("APP component rendered");

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const todoReducer = (state, action) => {
    if (action.type === "addTodo") {
      return [...state, action.payload];
    } else if (action.type === "deleteTodo") {
      return state.filter((todo) => todo.id !== action.payload);
    } else if (action.type === "editTodo") {
      console.log("inside editing a todo");
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });

      console.log(updatedTodos);
      return updatedTodos;
    }
  };

  const [todosState, dispatch] = useReducer(todoReducer, []);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const addTodo = (title) => {
    const todo = {
      id: Date.now(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setText("");
  };

  const handleSubmit = () => {
    if (text === "") {
      alert("Empty todo");
      return;
    }

    addTodo(text);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    // todos.push({ id: 2179846321874, title: "temp" });
    // console.log(todos);
    setTodos(filteredTodos);
  };

  const handleAddTodoViaDispatch = () => {
    const todo = {
      title: text,
      id: todoToEdit?.id || Date.now(),
    };

    if (!todoToEdit) {
      dispatch({ type: "addTodo", payload: todo });
    } else {
      dispatch({ type: "editTodo", payload: todo });
    }

    if (setIsEditing) setIsEditing(!setIsEditing);
    setText("");
    setTodoToEdit(null);
  };

  const handleDeleteTodoViaDispatch = (id) => {
    dispatch({ type: "deleteTodo", payload: id });

    if (text) setText("");
  };

  const handleEditTodoViaDispatch = (id) => {
    setIsEditing(!isEditing);
    const todo = todosState.find((todo) => todo.id === id);

    setTodoToEdit(todo);
    setText(todo.title);
  };

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
