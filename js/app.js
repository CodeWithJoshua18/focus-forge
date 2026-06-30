import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, markAsCompleted } from "./tasks/taskManager.js";

// Step 1: Create a new task
const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
const task2 = createTask(2, 'Read js', 'touch on oop', 'medium', 102);

// Step 2: Add it to the task list
addTask(newTask);
addTask(task2)
console.log("Before completion:", listTasks());

// Step 3: Mark the task as completed
const result = markAsCompleted(1);

// Step 4: Check the result
if (result) {
    console.log("Task marked as completed successfully.");
} else {
    console.log("Task not found.");
}

// Step 5: List tasks again to confirm status change
console.log("After completion:", listTasks());
