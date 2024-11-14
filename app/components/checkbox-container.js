import Component from "../components/Component";
import TodoForm from "../components/TodoForm";
import { useState } from "react";

export default function CheckboxContainer() {
  const [todos, setTodos] = useState(["Complete task", "Review code"]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-4 max-w-screen-sm">
      {todos.map((todo, index) => (
        <Component key={index} label={todo} />
      ))}
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
}
