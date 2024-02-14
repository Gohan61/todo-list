export default function priority(listObj) {
  function changePriority(item, list = "Tasks") {
    if (listObj.getLists()[list][item]["priority"] === "") {
      listObj.getLists()[list][item]["priority"] = "!";
    } else {
      listObj.getLists()[list][item]["priority"] = "";
    }
  }
  return { changePriority };
}
