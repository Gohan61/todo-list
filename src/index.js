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
import showComplete from "./showComplete";

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
const navBarListObj = navLists(listObj, updateDisplayToDoObj);
const newToDoObj = newToDoItem(
  toDoObj.addToDo,
  listObj,
  updateDisplayToDoObj,
  navBarListObj
);
const showCompletedObj = showComplete(completed, navBarListObj);
navBarListObj.updateNavLists();
navBarListObj.displayListToDo();
const deleteListObj = deleteLists(listObj, navBarListObj);
const newListObj = newList(
  listObj,
  navBarListObj,
  navBarListObj,
  deleteListObj
);
