export default function priority(listObj) {
  function changePriority(id, list = "Tasks") {
    if (listObj.getLists()[list][id]["priority"] === false) {
      listObj.getLists()[list][id]["priority"] = true;
    } else {
      listObj.getLists()[list][id]["priority"] = false;
    }
  }
  return { changePriority };
}
