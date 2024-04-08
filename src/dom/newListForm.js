import newList from "../newList";

const newListForm = document.querySelector(".newListDiv");
const newListValue = document.querySelector("#newList");

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();

  newList(newListValue.value);
  newListValue.value = "";
});
