import useAppSelector from "hooks/useAppSelector";
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const base = "todo-list";
  const { todos } = useAppSelector((state) => state.todo);

  console.log(todos, "todos");

  return (
    <div className={base}>
      {!!todos?.length &&
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
};
