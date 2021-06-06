const ADD_TODO = "ADD_TODO";

export const addText = (value) => ({
  type: "ADD_TEXT",
  message: value,
});

export const addTodo = (message) => ({
  type: ADD_TODO,
  message,
  id: Math.random(),
});

const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const editTodo = (id) => ({
  type: "EDIT_TODO",
  id,
});
