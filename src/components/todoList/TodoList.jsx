import React, { useEffect } from "react";

const TodoList = ({ todos, deleteTodo }) => {
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todos ? (
        todos.map((todo, i) => {
          return (
            <ul key={i}>
              <li className="border d-flex">
                <div className="text">
                  <p>Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted">no items on the list ..</p>
      )}
    </div>
  );
};

export default TodoList;
