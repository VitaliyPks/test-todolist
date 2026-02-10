import { TodoForm } from "pages/TodoPages/TodoForm";
import { TodoList } from "pages/TodoPages/TodoList";

export const TodoPages = () => {
  const base = "todo-pages";

  return (
    <div className={base}>
      <div className={`${base}__content`}>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};
