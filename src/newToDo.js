import { format } from "date-fns";

export default function newToDoItem(
  obj,
  listObj,
  updateDisplayToDoObj,
  navBarListObj
) {
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

    const currentToDo = obj(
      currentList.value,
      title.value,
      description.value,
      format(date.value, "ccc d-LLL-yyyy"),
      priority.checked,
      notes.value
    );

    updateDisplayToDoObj.updateDisp(currentList.value);

    navBarListObj.setCurrentList(currentList.value);

    newToDo.reset();
  });
}
