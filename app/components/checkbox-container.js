import Component from "../components/Component";
import TodoForm from "../components/TodoForm";
import { useState, useEffect } from "react";

export default function CheckboxContainer() {
  const [todos, setTodos] = useState([""]);

  useEffect(() => {
    fetch(`/api/get-pet/`)
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos.todos.rows.map((obj) => obj.text));
      });
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    fetch(`/api/add-pet?text=${newTodo}`)
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos.todos.rows.map((obj) => obj.text));
      });
  };

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-4 max-w-screen-sm">
      {todos.map((todo, index) => (
        <Component key={index} label={todo} setTodos={setTodos} />
      ))}
      <TodoForm onAddTodo={addTodo} />
    </div>
  );
}
