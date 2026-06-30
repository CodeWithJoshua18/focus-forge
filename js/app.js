import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, deleteTask, markAsCompleted } from "./tasks/taskManager.js";

// Create and add a task
const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
addTask(newTask);


const task2 = createTask(2, 'learn js', 'focus on functions', 'medium', 105);
addTask(task2);

console.log("Task added:", newTask, task2);

// List tasks
console.log("All tasks:\n" + listTasks());

// Mark task as completed

