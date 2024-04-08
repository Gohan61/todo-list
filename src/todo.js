import { listObj } from "./list";

function newToDo(
  list,
  title = undefined,
  description = undefined,
  dueDate = undefined,
  priority = undefined,
  notes = undefined,
  id = Date.now(),
) {
  listObj.getLists()[list][id] = {
    title,
    description,
    dueDate,
    priority,
    notes,
  };
  return { id };
}

function editToDo(list, id, field, change) {
  listObj.getLists()[list][id][field] = change;
}

let newToDoObj;

// newToDoObj = newToDo("Tasks", "Second try", "Desc2", "20202", "yes", "okay");
