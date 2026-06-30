import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, deleteTask } from "./tasks/taskManager.js";

// manually creating a new task and listing all tasks
const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
addTask(newTask);
console.log("Task added:", newTask);

const task = listTasks();
console.log(task);

console.log(deleteTask(1));


