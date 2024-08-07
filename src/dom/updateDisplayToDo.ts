/* eslint-disable no-restricted-syntax */
import { listObj } from "../list";
import deleteItems from "../delete";
import { checkCompleted, completedListObj } from "../completeToDo";
import changePriority from "../priority";
import storeLocal, { storeLocalCompleted } from "../localStorage";

const listToDo: HTMLDivElement | null = document.querySelector(".listToDo");

export type ListValues = {
  title: string;
  dueDate: string;
  description: string;
  priority: boolean;
  notes: string;
};

export function updateDisplayToDo(list: string) {
  for (const [key, value] of Object.entries(
    listObj.getLists()[list] as Record<string, ListValues>
  )) {
    const toDoDiv = document.createElement("div");
    const checkToDo = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");
    const expand = document.createElement("button");
    const deleteButton = document.createElement("button");
    const description = document.createElement("div");
    const notes = document.createElement("div");
    const changePriorityButton = document.createElement("button");

    title.textContent = value.title;
    date.textContent = value.dueDate;
    checkToDo.textContent = "Finished";
    expand.textContent = "Expand";
    deleteButton.textContent = "Delete";
    description.textContent = value.description;
    description.style.display = "none";
    if (Object.values([value.priority]).includes(true)) {
      toDoDiv.style.backgroundColor = "red";
    }
    notes.textContent = value.notes;
    notes.style.display = "none";
    changePriorityButton.textContent = "Priority";
    changePriorityButton.style.display = "none";

    expand.addEventListener("click", () => {
      expand.textContent = "Collapse";
      if (description.style.display === "none") {
        description.style.display = "";
        notes.style.display = "";
        changePriorityButton.style.display = "";
      } else {
        description.style.display = "none";
        notes.style.display = "none";
        changePriorityButton.style.display = "none";
        expand.textContent = "Expand";
      }
    });

    deleteButton.addEventListener("click", () => {
      deleteItems(list, key);
      toDoDiv.remove();
      storeLocal(listObj.getLists());
    });

    checkToDo.addEventListener("click", () => {
      checkCompleted(key, list);
      toDoDiv.remove();
      storeLocalCompleted(completedListObj.getCompletedLists());
      storeLocal(listObj.getLists());
    });

    changePriorityButton.addEventListener("click", () => {
      if (toDoDiv.style.backgroundColor === "") {
        toDoDiv.style.backgroundColor = "red";
      } else {
        toDoDiv.style.backgroundColor = "";
      }
      changePriority(key, list);
    });

    if (listToDo) {
      listToDo.append(toDoDiv);
    }
    toDoDiv.append(checkToDo, title, date, expand, deleteButton);
    toDoDiv.insertBefore(description, expand);
    toDoDiv.insertBefore(notes, expand);
    toDoDiv.insertBefore(changePriorityButton, expand);
  }
}

export function wipeDisplay(): void {
  while (listToDo && listToDo.firstChild) {
    listToDo.removeChild(listToDo.lastChild!);
  }
}
