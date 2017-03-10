export function addTodo(value) {
  return {
    type: "TODO_ADD",
    payload: value
  };
}

export function deleteTodo(id) {
  return {
    type: "TODO_DELETE",
    payload: id
  };
}

export function markComplete(id) {
  return {
    type: "TODO_COMPLETE",
    payload: id
  };
}