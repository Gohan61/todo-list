export default function newList(listObj) {
  const newListForm = document.querySelector(".newListDiv");

  newListForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newListInput = document.querySelector("#newList");

    listObj.addLists(newListInput.value);

    newListForm.reset();
  });
}
