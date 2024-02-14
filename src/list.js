export default function list() {
  const lists = {
    Tasks: [],
  };

  const getLists = () => lists;

  function addLists(name) {
    if (lists.hasOwnProperty(name)) {
      console.log("List name already exists");
    } else {
      lists[name] = [];
    }
  }

  function changeListName(newListName, currentList) {
    if (lists[newListName] === lists["Tasks"]) {
      ("Cannot change default Tasks list");
    } else {
      lists[newListName] = lists[currentList];

      delete lists[currentList];
    }
  }
  return { getLists, addLists, changeListName };
}
