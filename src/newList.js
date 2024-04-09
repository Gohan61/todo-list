import { listObj } from "./list";
import updateNavLists, {
  updateFormList,
  displayListToDo,
} from "./dom/navLists";

export default function newList(newListItem) {
  if (Object.hasOwn(listObj.getLists(), newListItem)) {
    return false;
  }
  listObj.getLists()[newListItem] = {};
  updateNavLists();
  displayListToDo();
  updateFormList();
}
