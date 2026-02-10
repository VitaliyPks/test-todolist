export const saveTodosMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("todos/") && !action.type.includes("setFilter")) {
    const state = store.getState();

    try {
      localStorage.setItem("todos", JSON.stringify(state.todo.todos));
    } catch (error) {
      console.error("Ошибка загрузки из Локального хранилища:", error);
    }
  }

  return result;
};
