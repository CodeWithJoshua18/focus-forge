import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, updateTask, markAsCompleted } from "./tasks/taskManager.js";
import { createProject } from "../projects/projectModel.js";

let output = ""; // collect all logs here

// 1. Create and add tasks
const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
addTask(newTask);
output += "Initial task list:\n" + listTasks() + "\n\n";

const task2 = createTask(2, "Fix frontend", "Screen refreshing after few seconds", "medium", 102);
addTask(task2);
output += "Task 2 added:\n" + listTasks() + "\n\n";

// 2. Mark as completed
const result1 = markAsCompleted(1);
output += "Mark as completed result: " + result1 + "\n";
output += "After completion:\n" + listTasks() + "\n\n";

// 3. Try marking the same task again
const result2 = markAsCompleted(1);
output += "Mark again result: " + result2 + "\n\n";

// 4. Try marking a non-existent task
const result3 = markAsCompleted(999);
output += "Non-existent task result: " + result3 + "\n\n";

// 5. Test updateTask with empty updates
const result4 = updateTask(1, {});
output += "Empty updates result: " + result4 + "\n\n";

// 6. Test updateTask with valid updates
const result5 = updateTask(1, { priority: "low", title: "Fix login bug quickly" });
output += "Update result: " + result5 + "\n";
output += "After update:\n" + listTasks() + "\n\n";

// Finally, print everything at once
console.log(output);

// create a new project
const project1 = createProject(1, "Create project model","Discuss project model", "today");

console.log("Your created project: ", project1);

