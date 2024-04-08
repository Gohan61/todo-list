function list() {
  const lists = {
    Tasks: {},
  };

  const getLists = () => lists;
  const setLists = (localList) => (lists = localList);

  return { getLists, setLists };
}

export let listObj;
if (JSON.parse(localStorage.getItem("uncompletedTasks"))) {
  listObj.setLists(JSON.parse(localStorage.getItem("uncompletedTasks")));
} else {
  listObj = list();
}

export function changeListName(listObject, newListName, currentList) {
  if (listObject.getLists()[newListName] === listObject.getLists().Tasks) {
    return false;
  }
  listObject.getLists()[newListName] = listObject.getLists()[currentList];

  delete listObj.getLists()[currentList];
}
