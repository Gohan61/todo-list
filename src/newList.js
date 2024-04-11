import { listObj } from "./list";
import updateNavLists, {
  updateFormList,
  displayListToDo,
  showInfo,
} from "./dom/navLists";
import deleteListDOM from "./dom/deleteListButton";
import { showCompleted, wipeCompleted } from "./dom/showComplete";

export default function newList(newListItem) {
  if (Object.hasOwn(listObj.getLists(), newListItem)) {
    return false;
  }
  listObj.getLists()[newListItem] = {};
  updateNavLists();
  displayListToDo();
  updateFormList();
  showCompleted();
  wipeCompleted();
  deleteListDOM();
  showInfo()
}
