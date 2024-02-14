import list from "./list";
import toDo from "./todo";
import completeToDo from "./completeToDo";

const listObj = list();
const toDoObj = toDo(listObj);
const completed = completeToDo(listObj);

listObj.addLists("second");

toDoObj.addToDo({ type: "First to do" });
toDoObj.addToDo({ type: "Some more to do on first" });
toDoObj.addToDo({ type: "Second to do" }, "second");

completed.checkCompleted(0);
completed.checkCompleted(0, "second");

completed.undoComplete(0);

console.log(completed.getCompletedList());
console.log(listObj.getLists());
