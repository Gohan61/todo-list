import deleteLists from "../deleteLists";

export default function deleteListDOM() {
  const deleteListButton = document.querySelectorAll(".deleteList");

  deleteListButton.forEach((button) => {
    button.addEventListener("click", () => {
      const listAttr = button.getAttribute("list");
      const listDiv = document.querySelector(`div[list=${listAttr}`);
      deleteLists(listAttr);
      listDiv.remove();
    });
  });
}
