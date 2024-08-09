import { format } from "date-fns";
import { newToDoObj } from "../todo";
import { listObj } from "../list";
import { updateDisplayToDo, wipeDisplay } from "./updateDisplayToDo";
import storeLocal from "../localStorage";

export default function newToDoItem(): void {
  const newToDo: HTMLFormElement | null = document.querySelector(".newToDo");
  const newToDoForm: HTMLButtonElement | null =
    document.querySelector(".newToDoForm");

  if (newToDoForm) {
    newToDoForm.addEventListener("click", () => {
      if (newToDo && newToDo.style.display === "none") {
        newToDo.style.display = "";
      }
    });
  }

  const currentList: HTMLSelectElement | null = document.querySelector("#list");
  const title: HTMLInputElement | null = document.querySelector("#title");
  const description: HTMLInputElement | null =
    document.querySelector("#description");
  const date: HTMLInputElement | null = document.querySelector("#date");
  const priority: HTMLInputElement | null = document.querySelector("#priority");
  const notes: HTMLTextAreaElement | null = document.querySelector("#notes");

  if (newToDo) {
    newToDo.addEventListener("submit", (e) => {
      e.preventDefault();

      if (currentList && title && description && date && priority && notes) {
        newToDoObj.setNewToDo(
          currentList.value,
          title.value,
          description.value,
          format(date.value, "ccc d-LLL-yyyy"),
          priority.checked,
          notes.value
        );

        wipeDisplay();
        updateDisplayToDo(currentList.value);
        storeLocal(listObj.getLists());

        newToDo.reset();
        newToDo.style.display = "none";
      }
    });
  }
}
