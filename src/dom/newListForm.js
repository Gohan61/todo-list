import newList from "../newList";
import storeLocal from "../localStorage";
import { listObj } from "../list";

const newListForm = document.querySelector(".newListDiv");
const newListValue = document.querySelector("#newList");

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();

  newList(newListValue.value);
  storeLocal(listObj.getLists());
  newListValue.value = "";
});
