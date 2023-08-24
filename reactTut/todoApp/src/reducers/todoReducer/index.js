import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./action.types";

const todoReducer = (state, action) => {
  // if (action.type === ADD_TODO) {
  //   return [...state, action.payload];
  // } else if (action.type === DELETE_TODO) {
  //   return state.filter((todo) => todo.id !== action.payload);
  // } else if (action.type === EDIT_TODO) {
  //   const updatedTodos = state.map((todo) => {
  //     if (todo.id === action.payload.id) {
  //       return { ...todo, title: action.payload.title };
  //     }
  //     return todo;
  //   });
  //   return updatedTodos;
  // } else {
  //   return state;
  // }

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todoReducer;
