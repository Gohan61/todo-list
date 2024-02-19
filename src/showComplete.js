export default function showComplete(completedList, currentList) {
  const showCompleted = document.querySelector(".showCompleted");
  const completedListDiv = document.querySelector(".completedList");

  showCompleted.addEventListener("click", () => {
    showFinished();
    if (showCompleted.textContent === "Show finished to-do's") {
      showCompleted.textContent = "Hide finished to-do's";
      completedListDiv.style.display = "";
    } else {
      showCompleted.textContent = "Show finished to-do's";
      completedListDiv.style.display = "none";
    }
  });

  function showFinished() {
    while (completedListDiv.firstChild) {
      completedListDiv.removeChild(completedListDiv.lastChild);
    }

    for (const [key, value] of Object.entries(
      completedList.getCompletedList()[currentList.getCurrentList()]
    )) {
      const toDoDiv = document.createElement("div");
      const uncheckToDo = document.createElement("button");
      const title = document.createElement("div");
      const date = document.createElement("div");

      title.textContent = [value.title];
      date.textContent = [value.dueDate];
      uncheckToDo.textContent = "Undo";
      console.log(key, value);

      uncheckToDo.addEventListener("click", () => {
        completedList.undoComplete(key, currentList.getCurrentList());
        toDoDiv.remove();
      });

      completedListDiv.append(toDoDiv);
      toDoDiv.append(title, date, uncheckToDo);
    }
  }
}
