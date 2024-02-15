export default function newToDoItem(
  obj,
  listObj,
  deleteObj,
  completed,
  priorityObj
) {
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
    const changePriority = document.createElement("button");

    title.textContent = listObj.getLists()[list][id]["title"];
    date.textContent = listObj.getLists()[list][id]["dueDate"];
    checkToDo.textContent = "Finished";
    expand.textContent = "Expand";
    deleteButton.textContent = "Delete";
    description.textContent = listObj.getLists()[list][id]["description"];
    description.style.display = "none";
    if (listObj.getLists()[list][id]["priority"] === true) {
      toDoDiv.style.backgroundColor = "red";
    }
    notes.textContent = listObj.getLists()[list][id]["notes"];
    notes.style.display = "none";
    changePriority.textContent = "Priority";
    changePriority.style.display = "none";

    expand.addEventListener("click", () => {
      expand.textContent = "Collapse";
      if (description.style.display === "none") {
        description.style.display = "";
        notes.style.display = "";
        changePriority.style.display = "";
      } else {
        description.style.display = "none";
        notes.style.display = "none";
        changePriority.style.display = "none";
        expand.textContent = "Expand";
      }
    });

    deleteButton.addEventListener("click", () => {
      deleteObj.deleteToDo(id);
      toDoDiv.remove();
    });

    checkToDo.addEventListener("click", () => {
      completed.checkCompleted(id);
      toDoDiv.remove();
    });

    changePriority.addEventListener("click", () => {
      priorityObj.changePriority(id);
      if (listObj.getLists()[list][id]["priority"] === true) {
        toDoDiv.style.backgroundColor = "red";
      } else {
        toDoDiv.style.backgroundColor = "";
      }
    });

    if (list === "Tasks") {
      listContainer.append(toDoDiv);
      toDoDiv.append(checkToDo, title, date, expand, deleteButton);
      toDoDiv.insertBefore(description, expand);
      toDoDiv.insertBefore(notes, expand);
      toDoDiv.insertBefore(changePriority, expand);
    }
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

    currentListing(currentToDo.id, currentList.value);

    newToDo.reset();
  });
}
