/* eslint-disable no-restricted-syntax */
import { completedListObj } from "../completeToDo";

const completedListDiv = document.querySelector(".completedList");

export function loadCompleted(list) {
  wipeCompleted();

  completedListDiv.textContent = "Completed To-Do's";

  for (const [key, value] of Object.entries(
    completedListObj.getCompletedLists()[list],
  )) {
    const toDoDiv = document.createElement("div");
    const uncheckToDo = document.createElement("button");
    const title = document.createElement("div");
    const date = document.createElement("div");

    title.textContent = [value.title];
    date.textContent = [value.dueDate];
    uncheckToDo.textContent = "Undo";

    // uncheckToDo.addEventListener("click", () => {
    //   completedListObj.undoComplete(key, list.getCurrentList());
    //   toDoDiv.remove();
    // });

    completedListDiv.append(toDoDiv);
    toDoDiv.append(title, date, uncheckToDo);
  }
}

export function showCompleted() {
  const showCompletedButton = document.querySelectorAll(".showCompleted");

  showCompletedButton.forEach((button) =>
    button.addEventListener("click", () => {
      loadCompleted(button.getAttribute("list"));
      if (completedListDiv.style.display === "none") {
        completedListDiv.style.display = "";
      } else if (completedListDiv.style.display === "") {
        completedListDiv.style.display = "none";
      }
    }),
  );
}

export function wipeCompleted() {
  while (completedListDiv.firstChild) {
    completedListDiv.removeChild(completedListDiv.lastChild);
  }
}
