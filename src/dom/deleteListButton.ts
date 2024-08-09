import deleteLists from "../deleteLists";
import { listObj } from "../list";
import storeLocal from "../localStorage";

export default function deleteListDOM(): void {
  const deleteListButton: NodeListOf<HTMLButtonElement> | null =
    document.querySelectorAll(".deleteList");

  if (deleteListButton) {
    deleteListButton.forEach((button) => {
      button.addEventListener("click", () => {
        const listAttr = button.getAttribute("list");
        const listDiv = document.querySelector(`div[list=${listAttr}`);
        if (listAttr && listDiv) {
          deleteLists(listAttr);
          listDiv.remove();
        }
        storeLocal(listObj.getLists());
      });
    });
  }
}
