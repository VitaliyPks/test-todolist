import { useState, useCallback } from "react";

interface DragState {
  isDragging: boolean;
  draggedId: number | null;
  dragOverId: number | null;
}

export const useDragAndDrop = (
  onReorder: (fromIndex: number, toIndex: number) => void,
) => {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedId: null,
    dragOverId: null,
  });

  const handleDragStart = useCallback((e: React.DragEvent, id: number) => {
    e.dataTransfer.effectAllowed = "move";

    setDragState({
      isDragging: true,
      draggedId: id,
      dragOverId: null,
    });

    e.dataTransfer.setData("text/plain", "");
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, id: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    setDragState((prev) => ({
      ...prev,
      dragOverId: id,
    }));
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget as HTMLElement;

    if (!e.currentTarget.contains(relatedTarget)) {
      setDragState((prev) => ({
        ...prev,
        dragOverId: null,
      }));
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, dropId: number, todos: any[]) => {
      e.preventDefault();

      const { draggedId } = dragState;
      if (draggedId === null || draggedId === dropId) {
        setDragState({ isDragging: false, draggedId: null, dragOverId: null });
        return;
      }

      const fromIndex = todos.findIndex((todo) => todo.id === draggedId);
      const toIndex = todos.findIndex((todo) => todo.id === dropId);

      if (fromIndex !== -1 && toIndex !== -1) {
        onReorder(fromIndex, toIndex);
      }

      setDragState({ isDragging: false, draggedId: null, dragOverId: null });
    },
    [dragState, onReorder],
  );

  const handleDragEnd = useCallback(() => {
    setDragState({ isDragging: false, draggedId: null, dragOverId: null });
  }, []);

  return {
    dragState,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  };
};
