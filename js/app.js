import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, updateTask, markAsCompleted } from "./tasks/taskManager.js";

// 1. Create and add a task
const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
addTask(newTask);
console.log("Initial task list:", listTasks());

// 2. Mark as completed
const result1 = markAsCompleted(1);
console.log("Mark as completed result:", result1);
console.log("After completion:", listTasks());

// 3. Try marking the same task again (already completed)
const result2 = markAsCompleted(1);
console.log("Mark again result:", result2);

// 4. Try marking a non-existent task
const result3 = markAsCompleted(999);
console.log("Non-existent task result:", result3);

// 5. Test updateTask with empty updates
const result4 = updateTask(1, {});
console.log("Empty updates result:", result4);

// 6. Test updateTask with valid updates
const result5 = updateTask(1, { priority: "low", title: "Fix login bug quickly" });
console.log("Update result:", result5);
console.log("After update:", listTasks());
