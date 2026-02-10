import useAppSelector from "hooks/useAppSelector";
import { TodoFilter } from "pages/TodoPages/TodoFilter";
import { TodoForm } from "pages/TodoPages/TodoForm";
import { TodoList } from "pages/TodoPages/TodoList";

export const TodoPages = () => {
  const base = "todo-pages";
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div className={base}>
      <div className={`${base}__content`}>
        <TodoForm />
        {!!todos && !!todos.length && <TodoFilter />}
        <TodoList />
      </div>
    </div>
  );
};
