import { listObj } from "./list";
import { completedListObj } from "./completeToDo";

export default function deleteLists(listName: string): void {
  delete listObj.getLists()[listName];
  if (Object.hasOwn(completedListObj.getCompletedLists(), listName)) {
    delete completedListObj.getCompletedLists()[listName];
  }
}
