export default function toDo(listObj) {
  function addToDo(toDoObject, list = "Tasks") {
    listObj.getLists()[list].push(toDoObject);
  }

  return { addToDo };
}
