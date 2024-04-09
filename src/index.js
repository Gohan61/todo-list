import list, { listObj } from "./list";
import toDo, { newToDoObj } from "./todo";
import completeToDo from "./completeToDo";
import priority from "./priority";
import deleteItems from "./delete";
import newToDoItem from "./dom/newToDo";
import newList from "./newList";
import navLists, { displayListToDo } from "./dom/navLists";
import updateDisplayToDo from "./dom/updateDisplayToDo";
import deleteLists from "./deleteLists";
import { showCompleted } from "./dom/showComplete";
import "./style.css";
import deleteList from "./deleteLists";

navLists();
newToDoItem();
displayListToDo();
showCompleted();
