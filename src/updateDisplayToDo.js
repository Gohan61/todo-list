export default function updateDisplayToDo(listObj) {
  const listToDo = document.querySelector(".listToDo");

  function updateDisp(list) {
    while (listToDo.firstChild) {
      listToDo.removeChild(listToDo.lastChild);
    }

    for (const [key, value] of Object.entries(listObj.getLists()[list])) {
      console.log(Object.entries(listObj.getLists()[list]));
      const toDoDiv = document.createElement("div");
      const checkToDo = document.createElement("button");
      const title = document.createElement("div");
      const date = document.createElement("div");
      const expand = document.createElement("button");
      const deleteButton = document.createElement("button");
      const description = document.createElement("div");
      const notes = document.createElement("div");
      const changePriority = document.createElement("button");

      title.textContent = [value.title];

      listToDo.append(toDoDiv);
      toDoDiv.append(checkToDo, title);
    }
  }
  return { updateDisp };
}
