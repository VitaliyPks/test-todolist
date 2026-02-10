import { TTodo } from "types/todo";

export const loadTodos = (): TTodo[] => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Ошибка при загрузки задач:", error);
    return [];
  }
};
