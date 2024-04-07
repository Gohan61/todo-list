import { listObj } from "./list";

export default function deleteLists(listObject, listName) {
  delete listObject.getLists()[listName];
}
