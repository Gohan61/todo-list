export default function toDo(listObj) {
  function addToDo(
    list = "Tasks",
    title = "",
    description = "",
    dueDate = "",
    priority = "",
    id = Date.now()
  ) {
    listObj.getLists()[list][id] = {
      title,
      description,
      dueDate,
      priority,
    };
  }

  function editToDo(id, field, change, list = "Tasks") {
    listObj.getLists()[list][id][field] = change;
  }

  return { addToDo, editToDo };
}
