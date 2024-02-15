export default function newToDoItem(obj, listObj, deleteObj) {
  const newToDo = document.querySelector(".newToDo");
  const newToDoForm = document.querySelector(".newToDoForm");

  newToDoForm.addEventListener("click", () => {
    if (newToDo.style.display === "none") {
      newToDo.style.display = "";
    }
  });

  const currentList = document.querySelector("#list");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");

  function currentListing(id, list = "Tasks") {
    const listContainer = document.querySelector(".listToDo");

    const toDoDiv = document.createElement("div");
    const checkToDo = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");
    const expand = document.createElement("button");
    const deleteButton = document.createElement("button");
    const description = document.createElement("div");
    const notes = document.createElement("div");

    title.textContent = listObj.getLists()[list][id]["title"];
    date.textContent = listObj.getLists()[list][id]["dueDate"];
    checkToDo.textContent = "Finished";
    expand.textContent = "Expand";
    deleteButton.textContent = "Delete";
    description.textContent = listObj.getLists()[list][id]["description"];
    if (listObj.getLists()[list][id]["priority"] === true) {
      toDoDiv.style.backgroundColor = "red";
    }
    notes.textContent = listObj.getLists()[list][id]["notes"];

    expand.addEventListener("click", () => {
      toDoDiv.insertBefore(description, expand);
      toDoDiv.insertBefore(notes, expand);
    });

    deleteButton.addEventListener("click", () => {
      deleteObj.deleteToDo(id);
      toDoDiv.remove();
    });

    listContainer.append(toDoDiv);
    toDoDiv.append(checkToDo, title, date, expand, deleteButton);
  }

  newToDo.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentToDo = obj(
      currentList.value,
      title.value,
      description.value,
      date.value,
      priority.checked,
      notes.value
    );

    currentListing(currentToDo.id);

    newToDo.reset();
  });
}
