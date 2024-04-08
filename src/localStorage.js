import { listObj } from "./list";

export default function storeLocal(lists) {
  localStorage.setItem("uncompletedTasks", JSON.stringify(lists));
}
