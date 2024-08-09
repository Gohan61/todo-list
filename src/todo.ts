import { listObj } from "./list";

export function newToDo(): { getId: any; setNewToDo: any } {
  let currentId: string;
  const setNewToDo = (
    list: string,
    title: string | undefined = undefined,
    description: string | undefined = undefined,
    dueDate: Date | undefined = undefined,
    priority: boolean | undefined = undefined,
    notes: string | undefined = undefined,
    id: number = Date.now()
  ) => {
    listObj.getLists()[list][id] = {
      title,
      description,
      dueDate,
      priority,
      notes,
    };
    currentId = id.toString();
  };

  const getId = (): string => currentId;

  return { getId, setNewToDo };
}

type Change = string | number | boolean | Date;

function editToDo(list: string, id: string, field: string, change: Change) {
  listObj.getLists()[list][id][field] = change;
}

export const newToDoObj = newToDo();
