import React from "react";
import Todo2 from "./Todo2";

function TodoList2({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo2 todos={todos} todo={todo} setTodos={setTodos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList2;
