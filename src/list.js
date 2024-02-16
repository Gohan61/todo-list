export default function list() {
  const lists = {
    Tasks: {},
  };

  const getLists = () => lists;
  const error = document.querySelector(".errorList");

  function addLists(name) {
    if (lists.hasOwnProperty(name)) {
      error.textContent = "List name already exists";
    } else if (name === "Tasks") {
      error.textContent = "List name already exists";
    } else {
      lists[name] = {};
      error.textContent = "";
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
