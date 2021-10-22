import React, { useState, useEffect } from "react";
import TodoForm from "../todoList/TodoForm";
import TodoList from "../todoList/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../reducers/actions";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodoLocal = (item) => {
    dispatch(addTodo(item.title, item.content));
  };
  const deleteTodoLocal = (item) => {
    dispatch(deleteTodo(item.title, item.content));
  };
  return (
    <div className="text-center py-2 todo-wrapper mb-5 container">
      <TodoForm addTodo={addTodoLocal} />
      <TodoList todos={todos} deleteTodo={deleteTodoLocal} />
    </div>
  );
}

export default Todo;
