import list from "./list";
import toDo from "./todo";
import completeToDo from "./completeToDo";
import priority from "./priority";
import deleteItems from "./delete";
import newToDoItem from "./newToDo";
import newList from "./newList";
import navLists from "./navLists";
import updateDisplayToDo from "./updateDisplayToDo";
import deleteLists from "./deleteLists";

const listObj = list();
const toDoObj = toDo(listObj);
const completed = completeToDo(listObj);
const priorityObj = priority(listObj);
const deleteObj = deleteItems(listObj);
const updateDisplayToDoObj = updateDisplayToDo(
  listObj,
  deleteObj,
  completed,
  priorityObj
);
const newToDoObj = newToDoItem(toDoObj.addToDo, listObj, updateDisplayToDoObj);

const navBarListObj = navLists(listObj, updateDisplayToDoObj);
navBarListObj.updateNavLists();
navBarListObj.displayListToDo();
const deleteListObj = deleteLists(listObj, navBarListObj);
const newListObj = newList(
  listObj,
  navBarListObj,
  navBarListObj,
  deleteListObj
);

// const currentListObj = currentList(listObj, newToDoObj.id);

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
