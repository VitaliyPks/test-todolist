import { useCallback } from "react";

import { useDragAndDrop } from "hooks/useDragAndDrop";
import useAppSelector from "hooks/useAppSelector";
import useActions from "hooks/useActions";

import { TodoItem } from "pages/TodoPages/TodoItem";

export const TodoList = () => {
  const base = "todo-list";
  const { reorderTodos } = useActions();
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

  const handleReorder = useCallback(
    (fromIndex: number, toIndex: number) => {
      reorderTodos({ fromIndex, toIndex });
    },
    [reorderTodos],
  );

  const {
    dragState,
    handleDrop,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
    handleDragLeave,
  } = useDragAndDrop(handleReorder);

  if (!filterTodos || !filterTodos.length) return null;

  return (
    <div className={base}>
      {filterTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          isDragging={dragState.draggedId === todo.id}
          isDragOver={dragState.dragOverId === todo.id}
          onDragStart={(e) => handleDragStart(e, todo.id)}
          onDragOver={(e) => handleDragOver(e, todo.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, todo.id, filterTodos)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};
