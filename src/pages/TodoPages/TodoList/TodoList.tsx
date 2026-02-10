import useAppSelector from "hooks/useAppSelector";

import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const base = "todo-list";
  const { todos, filter } = useAppSelector((state) => state.todo);

  const filterTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  if (!filterTodos || !filterTodos.length) return null;

  return (
    <div className={base}>
      {filterTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
