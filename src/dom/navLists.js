/* eslint-disable no-restricted-syntax */
import { listObj } from "../list";
import { wipeDisplay, updateDisplayToDo } from "./updateDisplayToDo";
import { wipeCompleted } from "./showComplete";

const navBarLists = document.querySelector(".navLists");
const showCompletedButton = document.querySelectorAll(".showCompleted");
const completedListDiv = document.querySelector(".completedList");
const formList = document.querySelector("#list");

export default function updateNavLists() {
  while (navBarLists.firstChild) {
    navBarLists.removeChild(navBarLists.lastChild);
  }
  for (const [key, value] of Object.entries(listObj.getLists())) {
    const button = document.createElement("button");
    const finishedToDoButton = document.createElement("button");
    const finishedToDoIcon = document.createElement("i");
    const infoBlock = document.createElement("span");
    infoBlock.setAttribute("class", "infoBlock");
    infoBlock.setAttribute("list", key);
    finishedToDoIcon.setAttribute("class", "material-icons");
    finishedToDoIcon.textContent = "check_box";

    button.setAttribute("list", key);
    button.setAttribute("class", "navListButton");
    button.textContent = key;
    finishedToDoButton.setAttribute("list", key);
    finishedToDoButton.setAttribute("class", "showCompleted");

    const deleteList = document.createElement("button");
    deleteList.setAttribute("list", key);
    deleteList.setAttribute("class", "deleteList");

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "material-icons");
    deleteIcon.textContent = "delete";

    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("list", key);

    if (key === "Tasks") {
      navBarLists.append(containerDiv);
      finishedToDoButton.setAttribute("list", "Tasks");
      containerDiv.append(button, finishedToDoButton, infoBlock);
      finishedToDoButton.append(finishedToDoIcon);
    } else {
      navBarLists.append(containerDiv);
      containerDiv.append(button, deleteList, finishedToDoButton, infoBlock);
      finishedToDoButton.append(finishedToDoIcon);
      deleteList.append(deleteIcon);
    }
  }
}

export function displayListToDo() {
  const navBarListsChildren = document.querySelectorAll(".navListButton");
  wipeDisplay();
  navBarListsChildren.forEach((item) => {
    item.addEventListener("click", () => {
      wipeDisplay();
      wipeCompleted();
      updateDisplayToDo(item.getAttribute("list"));
    });
  });
}

export function updateFormList() {
  while (formList.firstChild) {
    formList.removeChild(formList.lastChild);
  }

  for (const [list] of Object.entries(listObj.getLists())) {
    const listOption = document.createElement("option");
    listOption.setAttribute("value", list);
    listOption.textContent = list;

    formList.append(listOption);
  }
}

export function showInfo() {
  const deleteButtons = document.querySelectorAll(".deleteList");
  const showCompletedButton = document.querySelectorAll(".showCompleted");

  deleteButtons.forEach((item) => {
    const itemAttr = item.getAttribute("list");
    const infoBlock = document.querySelector(`span[list=${itemAttr}]`);

    item.addEventListener("mouseover", () => {
      infoBlock.textContent = "Delete this list";
    });

    item.addEventListener("mouseout", () => {
      infoBlock.textContent = "";
    });
  });

  showCompletedButton.forEach((item) => {
    const itemAttr = item.getAttribute("list");
    const infoBlock = document.querySelector(`span[list=${itemAttr}]`);

    item.addEventListener("mouseover", () => {
      infoBlock.textContent = "Show/hide completed to-do's";
    });

    item.addEventListener("mouseout", () => {
      infoBlock.textContent = "";
    });
  });
}
