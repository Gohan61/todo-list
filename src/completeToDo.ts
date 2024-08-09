import { listObj } from "./list";
import { Lists } from "./localStorage";

interface CompletedListType {
  getCompletedLists: any;
  setCompletedLists: any;
}

export default function completedList(): CompletedListType {
  let completedLists: Lists = {
    Tasks: {},
  };

  const getCompletedLists = () => completedLists;
  const setCompletedLists = (localList: Lists) => (completedLists = localList);

  return { getCompletedLists, setCompletedLists };
}

export let completedListObj: CompletedListType;

if (JSON.parse(localStorage.getItem("completedTasks")!) as Lists) {
  completedListObj = completedList();
  completedListObj.setCompletedLists(
    JSON.parse(localStorage.getItem("completedTasks")!)
  );
} else {
  completedListObj = completedList();
}

export function checkCompleted(id: string, list: string) {
  if (!Object.hasOwn(completedListObj.getCompletedLists(), list)) {
    completedListObj.getCompletedLists()[list] = {};
  }
  completedListObj.getCompletedLists()[list][id] = listObj.getLists()[list][id];

  delete listObj.getLists()[list][id];
}

export function undoComplete(id: string, list: string) {
  listObj.getLists()[list][id] = completedListObj.getCompletedLists()[list][id];

  delete completedListObj.getCompletedLists()[list][id];
}
