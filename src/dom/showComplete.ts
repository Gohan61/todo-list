/* eslint-disable no-restricted-syntax */
import { completedListObj } from "../completeToDo";
import { undoComplete } from "../completeToDo";
import { listObj } from "../list";
import storeLocal, { storeLocalCompleted } from "../localStorage";
import { ListValues } from "./updateDisplayToDo";

const completedListDiv: HTMLDivElement | null =
  document.querySelector(".completedList");

export function loadCompleted(list: string) {
  wipeCompleted();

  const completedText = document.createElement("span");
  completedText.textContent = "Completed to-do's";

  for (const [key, value] of Object.entries(
    completedListObj.getCompletedLists()[list] as Record<string, ListValues>
  )) {
    const toDoDiv = document.createElement("div");
    const uncheckToDo = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");

    title.textContent = value.title;
    date.textContent = value.dueDate;
    uncheckToDo.textContent = "Undo";

    uncheckToDo.addEventListener("click", () => {
      undoComplete(key, list);
      toDoDiv.remove();
      storeLocal(listObj.getLists());
      storeLocalCompleted(completedListObj.getCompletedLists());
    });

    if (completedListDiv) {
      completedListDiv.append(completedText, toDoDiv);
    }
    toDoDiv.append(title, date, uncheckToDo);
  }
}

export function showCompleted() {
  const showCompletedButton = document.querySelectorAll(".showCompleted");

  showCompletedButton.forEach((button) =>
    button.addEventListener("click", () => {
      const buttonAttribute = button.getAttribute("list");
      if (completedListDiv && buttonAttribute) {
        loadCompleted(buttonAttribute);
        if (completedListDiv.style.display === "none") {
          completedListDiv.style.display = "";
        } else if (completedListDiv.style.display === "") {
          completedListDiv.style.display = "none";
        }
      }
    })
  );
}

export function wipeCompleted() {
  while (completedListDiv && completedListDiv.firstChild) {
    completedListDiv.removeChild(completedListDiv.lastChild!);
  }
}
