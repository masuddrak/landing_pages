"use client";

import { useCallback, useState } from "react";
import Todos from "./Todos";

const TodoApp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment} className="border-[2px] p-5">
          +
        </button>
      </div>
    </>
  );
};

export default TodoApp;
