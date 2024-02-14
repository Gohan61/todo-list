import list from "./list";
import toDo from "./todo";
import completeToDo from "./completeToDo";
import priority from "./priority";

const listObj = list();
const toDoObj = toDo(listObj);
const completed = completeToDo(listObj);
const priorityObj = priority(listObj);

listObj.addLists("second");

toDoObj.addToDo("Tasks", "First to do", "Here we go", "2024", "!");
toDoObj.addToDo("Tasks", "Some more to do on first");
toDoObj.addToDo("Tasks", "Try third");
// toDoObj.addToDo({ type: "Second to do" }, "second");

// completed.checkCompleted(0);
// completed.checkCompleted(0, "second");

// completed.undoComplete(0);
//
listObj.getLists()["Tasks"].forEach((el, i) => {
  if (el["id"] === 2) {
    priorityObj.changePriority(i);
  }
});
// priorityObj.changePriority(1);

console.log(completed.getCompletedList());
console.log(listObj.getLists());
