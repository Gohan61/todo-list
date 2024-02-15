import list from "./list";
import toDo from "./todo";
import completeToDo from "./completeToDo";
import priority from "./priority";
import deleteItems from "./delete";
import newToDoItem from "./newToDo";

const listObj = list();
const toDoObj = toDo(listObj);
const completed = completeToDo(listObj);
const priorityObj = priority(listObj);
const deleteObj = deleteItems(listObj);
const newToDoObj = newToDoItem(toDoObj.addToDo);

// listObj.addLists("second");

// toDoObj.addToDo("Tasks", "First to do", "Here we go", "2024", "!");
// // toDoObj.addToDo("Tasks", "Some more to do on first");
// // toDoObj.addToDo("Tasks", "Try third");
// toDoObj.addToDo("second", "Second to do", "Trying", 2025, "", 0);

// // completed.checkCompleted(0);
// completed.checkCompleted(0, "second");

// completed.undoComplete(0, "second");
// //

// priorityObj.changePriority(0, "second");

// // deleteObj.deleteToDo(0);
// // deleteObj.deleteList("second");

// toDoObj.editToDo(0, "title", "Changed second", "second");

console.log(completed.getCompletedList());
console.log(listObj.getLists());
