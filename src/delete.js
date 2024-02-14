export default function deleteItems(listObj) {
  function deleteToDo(item, list = "Tasks") {
    listObj.getLists()[list].splice(item, 1);
  }

  function deleteList(list) {
    delete listObj.getLists()[list];
  }

  return { deleteToDo, deleteList };
}
