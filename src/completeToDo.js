import { listObj } from "./list";

export default function completedList() {
  let completedLists = {
    Tasks: {},
  };

  const getCompletedLists = () => completedLists;
  const setCompletedLists = (localList) => (completedLists = localList);

  return { getCompletedLists, setCompletedLists };
}

export let completedListObj;

if (JSON.parse(localStorage.getItem("completedTasks"))) {
  completedListObj = completedList();
  completedListObj.setCompletedLists(
    JSON.parse(localStorage.getItem("completedTasks"))
  );
} else {
  completedListObj = completedList();
}

export function checkCompleted(id, list) {
  if (!Object.hasOwn(completedListObj.getCompletedLists(), list)) {
    completedListObj.getCompletedLists()[list] = {};
  }
  completedListObj.getCompletedLists()[list][id] = listObj.getLists()[list][id];

  delete listObj.getLists()[list][id];
}

export function undoComplete(id, list) {
  listObj.getLists()[list][id] = completedListObj.getCompletedLists()[list][id];

  delete completedListObj.getCompletedLists()[list][id];
}
