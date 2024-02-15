export default function newToDoItem(obj) {
  const newToDo = document.querySelector(".newToDo");
  const newToDoForm = document.querySelector(".newToDoForm");

  newToDoForm.addEventListener("click", () => {
    if (newToDo.style.display === "none") {
      newToDo.style.display = "";
    }
  });

  newToDo.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentList = document.querySelector("#list");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const date = document.querySelector("#date");
    const priority = document.querySelector("#priority");
    const notes = document.querySelector("#notes");

    obj(
      currentList.value,
      title.value,
      description.value,
      date.value,
      priority.checked,
      notes.value
    );
    newToDo.reset();
  });
}
