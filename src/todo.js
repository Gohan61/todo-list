export default function toDo(listObj) {
  function addToDo(
    list = "Tasks",
    title = "",
    description = "",
    dueDate = "",
    priority = "",
    id = Date.now()
  ) {
    // Object.assign({ id });
    listObj.getLists()[list][id] = {
      title,
      description,
      dueDate,
      priority,
    };
  }

  return { addToDo };
}
