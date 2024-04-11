import { listObj } from "./list";

export default function storeLocal(lists) {
  localStorage.setItem("uncompletedTasks", JSON.stringify(lists));
}

export function storeLocalCompleted(lists) {
  localStorage.setItem("completedTasks", JSON.stringify(lists));
}
