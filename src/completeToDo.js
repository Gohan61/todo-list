export default function completeToDo(listObj) {
  const completedList = [];

  function checkCompleted(item, list = "Tasks") {
    completedList.push(listObj.getLists()[list][item]);
    listObj.getLists()[list].splice(item, 1);
  }

  const getCompletedList = () => completedList;

  function undoComplete(item, list = "Tasks") {
    listObj.getLists()[list].push(completedList[item]);
    completedList.splice(item, 1);
  }
  return { checkCompleted, getCompletedList, undoComplete };
}
