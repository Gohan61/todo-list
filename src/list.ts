import { Lists } from "./localStorage";

export interface ListObjType {
  getLists: any;
  setLists: any;
}

function list(): ListObjType {
  let lists: Lists = {
    Tasks: {},
  };

  const getLists = () => lists;
  const setLists = (localList: Lists) => (lists = localList);

  return { getLists, setLists };
}

export let listObj: ListObjType;
if (JSON.parse(localStorage.getItem("uncompletedTasks")!) as Lists) {
  listObj = list();
  listObj.setLists(JSON.parse(localStorage.getItem("uncompletedTasks")!));
} else {
  listObj = list();
}

export function changeListName(
  listObject: ListObjType,
  newListName: string,
  currentList: string
) {
  if (listObject.getLists()[newListName] === listObject.getLists().Tasks) {
    return false;
  }
  listObject.getLists()[newListName] = listObject.getLists()[currentList];

  delete listObj.getLists()[currentList];
}
