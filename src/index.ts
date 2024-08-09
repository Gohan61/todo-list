import newToDoItem from "./dom/newToDo";
import navLists, {
  displayListToDo,
  showInfo,
  updateFormList,
} from "./dom/navLists";
import { showCompleted } from "./dom/showComplete";
import "./style.css";
import deleteListDOM from "./dom/deleteListButton";

navLists();
newToDoItem();
displayListToDo();
showCompleted();
deleteListDOM();
showInfo();
updateFormList();
