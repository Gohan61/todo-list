export default function toDo(listObj) {
  function addToDo(
    list = "Tasks",
    title = "",
    description = "",
    dueDate = "",
    priority = "",
    id = 2
  ) {
    listObj
      .getLists()
      [list].push({ title, description, dueDate, priority, id });
  }

  return { addToDo };
}
