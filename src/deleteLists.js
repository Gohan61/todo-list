export default function deleteLists(listObj, navBarListObj) {
  function deleteList() {
    let navBarListsChildren = document.querySelectorAll(".deleteList");

    navBarListsChildren.forEach((item) => {
      item.addEventListener("click", () => {
        delete listObj.getLists()[item.getAttribute("list")];
        navBarListObj.updateNavLists();
      });
    });
  }
  return { deleteList };
}
