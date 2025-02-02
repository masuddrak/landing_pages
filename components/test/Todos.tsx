import { memo } from "react";

interface TodosProps {
  todos: string[];
  addTodo: () => void;
}
const Todos: React.FC<TodosProps> = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Cretae Todos</button>
    </>
  );
};

export default memo(Todos);
