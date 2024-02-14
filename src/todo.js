export default function toDo(listObj) {
  function addToDo(list = "Tasks") {
    listObj.getLists()[list].push({ type: "test" });
  }

  return { addToDo };
}
