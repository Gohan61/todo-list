export default function priority(listObj) {
  function changePriority(id, list = "Tasks") {
    if (listObj.getLists()[list][id]["priority"] === "") {
      listObj.getLists()[list][id]["priority"] = "!";
    } else {
      listObj.getLists()[list][id]["priority"] = "";
    }
  }
  return { changePriority };
}
