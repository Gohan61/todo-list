export default function newList(listObj, navLists, displayList) {
  const newListForm = document.querySelector(".newListDiv");
  const listSelection = document.querySelector("#list");

  newListForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newListInput = document.querySelector("#newList");

    listObj.addLists(newListInput.value);

    const newListItem = document.createElement("option");
    newListItem.setAttribute("value", newListInput.value);
    newListItem.textContent = newListInput.value;
    listSelection.append(newListItem);

    navLists.updateNavLists();
    displayList.displayListToDo();

    newListForm.reset();
  });
}
