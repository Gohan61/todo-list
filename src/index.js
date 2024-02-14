import list from "./list";
import toDo from "./todo";
import completeToDo from "./completeToDo";
import priority from "./priority";

const listObj = list();
const toDoObj = toDo(listObj);
const completed = completeToDo(listObj);
const priorityObj = priority(listObj);

listObj.addLists("second");

toDoObj.addToDo({ type: "First to do", priority: "!" });
toDoObj.addToDo({ type: "Some more to do on first" });
toDoObj.addToDo({ type: "Second to do" }, "second");

completed.checkCompleted(0);
completed.checkCompleted(0, "second");

completed.undoComplete(0);

priorityObj.changePriority(1);
priorityObj.changePriority(1);

console.log(completed.getCompletedList());
console.log(listObj.getLists());
