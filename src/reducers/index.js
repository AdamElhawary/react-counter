import { ADD_TODO, DELETE_TODO } from "./actions";
const intialState = {
  todos: [],
};
export const TodoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state.todos.push(action.payload);
      console.log(state);
      return state;
    case DELETE_TODO:
      state.todos = state.todos.filter(
        (todo) => todo.title !== action.payload.title
      );
      console.log(state);
      return state;
    default:
      return state;
  }
};
