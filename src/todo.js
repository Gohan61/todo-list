import { listObj } from "./list";

export function newToDo() {
  let currentId;
  const setNewToDo = (
    list,
    title = undefined,
    description = undefined,
    dueDate = undefined,
    priority = undefined,
    notes = undefined,
    id = Date.now()
  ) => {
    listObj.getLists()[list][id] = {
      title,
      description,
      dueDate,
      priority,
      notes,
    };
    currentId = id;
  };

  const getId = () => currentId;

  return { getId, setNewToDo };
}

function editToDo(list, id, field, change) {
  listObj.getLists()[list][id][field] = change;
}

export const newToDoObj = newToDo();
