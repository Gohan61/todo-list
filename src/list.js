function list() {
  const lists = {
    Tasks: {},
  };

  const getLists = () => lists;

  return { getLists };
}

export const listObj = list();

export function changeListName(listObject, newListName, currentList) {
  if (listObject.getLists()[newListName] === listObject.getLists().Tasks) {
    return false;
  }
  listObject.getLists()[newListName] = listObject.getLists()[currentList];

  delete listObj.getLists()[currentList];
}
