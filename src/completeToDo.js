export default function completeToDo(listObj) {
  const completedList = {};

  function checkCompleted(id, list = "Tasks") {
    completedList[id] = listObj.getLists()[list][id];
    delete listObj.getLists()[list][id];
  }

  const getCompletedList = () => completedList;

  function undoComplete(id, list = "Tasks") {
    listObj.getLists()[list][id] = completedList[id];
    delete completedList[id];
  }
  return { checkCompleted, getCompletedList, undoComplete };
}
