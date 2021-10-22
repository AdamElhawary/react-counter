export const ADD_TODO = "ADD_TODO";
export const addTodo = (title, content) => {
  return {
    type: ADD_TODO,
    payload: { title: title, content: content },
  };
};
export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (title, content) => {
  return {
    type: DELETE_TODO,
    payload: { title: title, content: content },
  };
};
