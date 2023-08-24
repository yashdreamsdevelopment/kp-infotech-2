import todoReducer from "./reducers/todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./reducers/todoReducer/action.types";

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

export {
  onChangeHandler,
  handleAddTodoViaDispatch,
  handleEditTodoViaDispatch,
  handleDeleteTodoViaDispatch,
};
