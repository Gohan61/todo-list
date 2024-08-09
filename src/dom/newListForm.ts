import newList from "../newList";
import storeLocal from "../localStorage";
import { listObj } from "../list";

const newListForm: HTMLDivElement | null =
  document.querySelector(".newListDiv");
const newListValue: HTMLInputElement | null =
  document.querySelector("#newList");

if (newListForm && newListValue) {
  newListForm.addEventListener("submit", (e) => {
    e.preventDefault();

    newList(newListValue.value);
    storeLocal(listObj.getLists());
    newListValue.value = "";
  });
}
