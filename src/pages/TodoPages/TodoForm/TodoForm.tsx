import { FormEvent, useState } from "react";

import useActions from "hooks/useActions";

import Button from "components/base/Button";
import Input from "components/base/Input";

export const TodoForm = () => {
  const base = "todo-form";
  const [text, setText] = useState("");
  const { addTodo } = useActions();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={base}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача..."
      />
      <Button type="submit">Добавить</Button>
    </form>
  );
};
