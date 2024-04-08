import { listObj } from "./list";
import { completedListObj } from "./completeToDo";

export default function deleteItems(list, id) {
  delete listObj.getLists()[list][id];

  if (Object.hasOwn(completedListObj.getCompletedLists()[list], id)) {
    delete completedListObj.getCompletedLists()[list][id];
  }
}
