import classNames from "classnames";

import { CheckBox } from "components/base/CheckBox";
import Button from "components/base/Button";

import useActions from "hooks/useActions";

import { TTodo } from "types/todo";

interface TodoItemProps {
  todo: TTodo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const base = "todo-item";
  const { toggleTodo, deleteTodo } = useActions();

  return (
    <div className={classNames(base, { completed: todo.completed })}>
      <div className={`${base}__content`}>
        <CheckBox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={`${base}__text`}>{todo.text}</span>
      </div>
      <div className={`${base}__actions`}>
        <Button
          onClick={() => deleteTodo(todo.id)}
          className={`${base}__btn-delete`}
          mode="error"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
