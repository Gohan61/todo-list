export default function updateDisplayToDo(
  listObj,
  deleteObj,
  completed,
  priorityObj
) {
  const listToDo = document.querySelector(".listToDo");

  function updateDisp(list) {
    while (listToDo.firstChild) {
      listToDo.removeChild(listToDo.lastChild);
    }

    for (const [key, value] of Object.entries(listObj.getLists()[list])) {
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
      date.textContent = [value.dueDate];
      checkToDo.textContent = "Finished";
      expand.textContent = "Expand";
      deleteButton.textContent = "Delete";
      description.textContent = [value.description];
      description.style.display = "none";
      if (Object.values([value.priority]).includes(true)) {
        toDoDiv.style.backgroundColor = "red";
      }
      notes.textContent = [value.notes];
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
        deleteObj.deleteToDo(key);
        toDoDiv.remove();
      });

      checkToDo.addEventListener("click", () => {
        completed.checkCompleted(key, list);
        toDoDiv.remove();
      });

      changePriority.addEventListener("click", () => {
        if (Object.values([value.priority]).includes(false)) {
          toDoDiv.style.backgroundColor = "red";
          [(value.priority = true)];
        } else {
          toDoDiv.style.backgroundColor = "";
          [(value.priority = false)];
        }
      });

      listToDo.append(toDoDiv);
      toDoDiv.append(checkToDo, title, date, expand, deleteButton);
      toDoDiv.insertBefore(description, expand);
      toDoDiv.insertBefore(notes, expand);
      toDoDiv.insertBefore(changePriority, expand);
    }
  }
  return { updateDisp };
}
