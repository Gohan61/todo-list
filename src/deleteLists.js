export default function deleteLists(listObj, navBarListObj) {
  function deleteList() {
    let navBarListsChildren = document.querySelectorAll(".deleteList");

    navBarListsChildren.forEach((item) => {
      item.addEventListener("click", () => {
        delete listObj.getLists()[item.getAttribute("list")];
        navBarListObj.updateNavLists();
        const listValue = item.getAttribute("list");
        const listItem = document.querySelector(`[value=${listValue}]`);
        listItem.remove();
      });
    });
  }
  return { deleteList };
}
