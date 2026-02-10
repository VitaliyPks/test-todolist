import React, { useEffect, useRef, useState } from "react";
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";

import { TTodo } from "types/todo";

interface IUseEditTodoProps {
  todo: TTodo;
  editTodo: ActionCreatorWithOptionalPayload<
    {
      id: number;
      text: string;
    },
    "todos/editTodo"
  >;
  inputRef: React.RefObject<HTMLInputElement>;
}

const useEditTodo = ({ todo, editTodo, inputRef }: IUseEditTodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length,
      );
    }
  }, [isEditing]);

  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    const trimmedText = editText.trim();

    if (trimmedText && trimmedText !== todo.text) {
      editTodo({ id: todo.id, text: trimmedText });
    }

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  return {
    isEditing,
    editText,
    setEditText,
    handleKeyDown,
    handleSaveEdit,
    handleStartEdit,
    handleCancelEdit,
  };
};
export default useEditTodo;
