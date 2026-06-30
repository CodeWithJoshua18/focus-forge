import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks } from "./tasks/taskManager.js";

const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
addTask(newTask);

console.log("Task added:", newTask);
listTasks()
