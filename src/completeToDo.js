// export default function completeToDo(listObj) {
//   const completedList = {};

//   function checkCompleted(id, list = "Tasks") {
//     if (Object.hasOwn(completedList, list)) {
//     } else {
//       completedList[list] = {};
//     }
//     completedList[list][id] = listObj.getLists()[list][id];
//     console.log(completedList);

//     delete listObj.getLists()[list][id];
//   }

//   const getCompletedList = () => completedList;

//   function undoComplete(id, list = "Tasks") {
//     listObj.getLists()[list][id] = completedList[list][id];
//     delete completedList[list][id];
//   }
//   return { checkCompleted, getCompletedList, undoComplete };
// }

export default function completedList() {
  const completedLists = {
    Tasks: {},
  };

  const getCompletedLists = () => completedLists;
  const setCompletedLists = (localList) => (completedList = localList);

  return { getCompletedLists, setCompletedLists };
}

export let completedListObj;
if (JSON.parse(localStorage.getItem("completedTasks"))) {
  completedListObj.setCompletedLists(
    JSON.parse(localStorage.getItem("completedTasks")),
  );
} else {
  completedListObj = completedList();
}

// function checkCompleted(id, list) {
//   if (Object.hasOwn(completedListObj))
// }
