import deleteLists from "../deleteLists";
import { listObj } from "../list";
import storeLocal from "../localStorage";

export default function deleteListDOM() {
  const deleteListButton = document.querySelectorAll(".deleteList");

  deleteListButton.forEach((button) => {
    button.addEventListener("click", () => {
      const listAttr = button.getAttribute("list");
      const listDiv = document.querySelector(`div[list=${listAttr}`);
      deleteLists(listAttr);
      listDiv.remove();
      storeLocal(listObj.getLists())
    });
  });
}
