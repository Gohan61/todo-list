import { listObj } from "./list";
import updateNavLists, { updateFormList } from "./dom/navLists";

export default function newList(newListItem) {
  if (Object.hasOwn(listObj.getLists(), newListItem)) {
    return false;
  }
  listObj.getLists()[newListItem] = {};
  updateNavLists();
  updateFormList();
}
