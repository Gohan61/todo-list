import { listObj } from "./list";

export default function newList(listObject, newListItem) {
  if (Object.hasOwn(listObj.getLists(), newListItem)) {
    return false;
  }
  listObject.getLists()[newListItem] = {};
}
