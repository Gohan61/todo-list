export default function navLists(listObj, updateDisplayToDo) {
  const navBarLists = document.querySelector(".navLists");
  const listToDo = document.querySelector(".listToDo");
  const currentListOnPage = ["Tasks"];

  function updateNavLists() {
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
      deleteList.textContent = "Delete";

      if (key === "Tasks") {
        navBarLists.append(button);
      } else {
        navBarLists.append(button, deleteList);
      }
    }
  }

  function displayListToDo() {
    let navBarListsChildren = document.querySelectorAll(".navListButton");

    navBarListsChildren.forEach((item) => {
      item.addEventListener("click", () => {
        updateDisplayToDo.updateDisp(item.getAttribute("list"));
        currentListOnPage.splice(0, 1, item.getAttribute("list"));
        console.log(currentListOnPage);
      });
    });
  }
  const getCurrentList = () => currentListOnPage[0];

  return { updateNavLists, displayListToDo, getCurrentList };
}
