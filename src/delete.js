export default function deleteItems(listObj) {
  function deleteToDo(id, list = "Tasks") {
    delete listObj.getLists()[list][id];
  }

  function deleteList(list) {
    delete listObj.getLists()[list];
  }

  return { deleteToDo, deleteList };
}
