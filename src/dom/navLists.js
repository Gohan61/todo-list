/* eslint-disable no-restricted-syntax */
import { listObj } from "../list";
import { wipeDisplay, updateDisplayToDo } from "./updateDisplayToDo";

const navBarLists = document.querySelector(".navLists");
const showCompleted = document.querySelector(".showCompleted");
const completedListDiv = document.querySelector(".completedList");

export default function updateNavLists() {
  while (navBarLists.firstChild) {
    navBarLists.removeChild(navBarLists.lastChild);
  }
  for (const [key, value] of Object.entries(listObj.getLists())) {
    const button = document.createElement("button");
    button.setAttribute("list", key);
    button.setAttribute("class", "navListButton");
    button.textContent = key;

    const deleteList = document.createElement("button");
    deleteList.setAttribute("list", key);
    deleteList.setAttribute("class", "deleteList");

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "material-icons");
    deleteIcon.textContent = "delete";

    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("list", key);

    if (key === "Tasks") {
      navBarLists.append(button);
    } else {
      navBarLists.append(containerDiv);
      containerDiv.append(button, deleteList);
      deleteList.append(deleteIcon);
    }
  }
}

export function displayListToDo() {
  const navBarListsChildren = document.querySelectorAll(".navListButton");

  navBarListsChildren.forEach((item) => {
    item.addEventListener("click", () => {
      wipeDisplay();
      updateDisplayToDo(item.getAttribute("list"));
      if (showCompleted.textContent === "Hide finished to-do's") {
        showCompleted.textContent = "Show finished to-do's";
        completedListDiv.style.display = "none";
      }
    });
  });
}
