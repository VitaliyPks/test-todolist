import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { CheckBox } from "components/base/CheckBox";
import Button from "components/base/Button";
import Input from "components/base/Input";

import useEditTodo from "pages/TodoPages/TodoItem/useEditTodo";

import useActions from "hooks/useActions";

import { TTodo } from "types/todo";

interface TodoItemProps {
  todo: TTodo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const base = "todo-item";
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTodo, deleteTodo, editTodo } = useActions();

  const {
    isEditing,
    editText,
    setEditText,
    handleKeyDown,
    handleSaveEdit,
    handleStartEdit,
    handleCancelEdit,
  } = useEditTodo({
    todo,
    editTodo,
    inputRef,
  });

  return (
    <div className={classNames(base, { completed: todo.completed })}>
      <div className={`${base}__content`}>
        <CheckBox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {!isEditing ? (
          <span className={`${base}__text`}>{todo.text}</span>
        ) : (
          <div className={`${base}__edit-container`}>
            <Input
              ref={inputRef}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <div className={`${base}__edit-actions`}>
              <Button
                onClick={handleSaveEdit}
                className={`${base}__edit-btn`}
                type="button"
              >
                ✓
              </Button>
              <Button
                onClick={handleCancelEdit}
                className={`${base}__edit-btn`}
                mode="error"
                type="button"
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className={`${base}__actions`}>
        {!isEditing && (
          <>
            <Button
              onClick={handleStartEdit}
              className={`${base}__btn`}
              mode="green-transparent"
              type="button"
            >
              Изменить
            </Button>
            <Button
              onClick={() => deleteTodo(todo.id)}
              className={`${base}__btn`}
              mode="error"
              type="button"
            >
              Удалить
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
