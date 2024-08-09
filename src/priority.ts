import { listObj } from "./list";
import storeLocal from "./localStorage";

export default function changePriority(id: string, list: string): void {
  if (listObj.getLists()[list][id].priority === false) {
    listObj.getLists()[list][id].priority = true;
    storeLocal(listObj.getLists());
  } else {
    listObj.getLists()[list][id].priority = false;
    storeLocal(listObj.getLists());
  }
}
