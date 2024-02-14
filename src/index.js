import list from "./list";
import toDo from "./todo";

const listObj = list();
const toDoObj = toDo(listObj);

listObj.addLists("second");

toDoObj.addToDo();
toDoObj.addToDo("second");

console.log(listObj.getLists());
