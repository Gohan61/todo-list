import { format } from "date-fns";
import { newToDoObj } from "../todo";
import { listObj } from "../list";
import { updateDisplayToDo, wipeDisplay } from "./updateDisplayToDo";

export default function newToDoItem() {
  const newToDo = document.querySelector(".newToDo");
  const newToDoForm = document.querySelector(".newToDoForm");

  newToDoForm.addEventListener("click", () => {
    if (newToDo.style.display === "none") {
      newToDo.style.display = "";
    }
  });

  const currentList = document.querySelector("#list");
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const priority = document.querySelector("#priority");
  const notes = document.querySelector("#notes");

  newToDo.addEventListener("submit", (e) => {
    e.preventDefault();

    newToDoObj.setNewToDo(
      currentList.value,
      title.value,
      description.value,
      format(date.value, "ccc d-LLL-yyyy"),
      priority.checked,
      notes.value,
    );

    wipeDisplay();
    updateDisplayToDo(currentList.value);

    // navBarListObj.setCurrentList(currentList.value);

    console.log(listObj.getLists());
    console.log(newToDoObj.getId());

    newToDo.reset();
    newToDo.style.display = "none";
  });
}
