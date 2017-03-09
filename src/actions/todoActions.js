export function addTodo(value) {
  return {
    type: "TODO_ADD",
    payload: value
  };
}