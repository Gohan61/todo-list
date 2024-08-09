export interface Lists {
  [propName: string]: {
    id?: {
      list?: string;
      title?: string;
      description?: string;
      dueDate?: Date;
      priority?: boolean;
      notes?: string;
    };
  };
}

export default function storeLocal(lists: Lists) {
  localStorage.setItem("uncompletedTasks", JSON.stringify(lists));
}

export function storeLocalCompleted(lists: Lists) {
  localStorage.setItem("completedTasks", JSON.stringify(lists));
}
