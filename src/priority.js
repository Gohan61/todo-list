import { listObj } from "./list";

function changePriority(id, list) {
  if (listObj.getLists()[list][id].priority === false) {
    listObj.getLists()[list][id].priority = true;
  } else {
    listObj.getLists()[list][id].priority = false;
  }
}
