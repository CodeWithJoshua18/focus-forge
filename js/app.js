import { createTask } from "./tasks/taskModel.js";
import { addTask, listTasks, updateTask, markAsCompleted } from "./tasks/taskManager.js";
import { createProject } from "./projects/projectModel.js";
import { addProject, listProjects, projectList, updateProject, deleteProject, archiveProject } from "./projects/projectManager.js";


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


// 1. Create a valid project
const project1 = createProject({
    id: 1,
    name: "Website Redesign",
    description: "Update UI and UX",
    deadline: "2026-07-30"
});
console.log("Project 1:", project1);

// 2. Create a project with minimal fields (description and deadline optional)
const project2 = createProject({
    id: 2,
    name: "Mobile App Development"
});
console.log("Project 2:", project2);

// 3.  creating a project with invalid data (missing name)
const project3 = createProject({
    id: 3,
    name: "   " 
});
console.log("Project 3:", project3);

// add project to list
addProject(project1);
addProject(project2);
console.log("Current Projects: ", projectList);

// list projects
listProjects(project1);
console.log("Your Projects: ", projectList);

// update project
const updateResult1 = updateProject(1, { name: "Website Revamp"});
console.log("Updated project: ", updateResult1);

// archive project
const archiveResult1 = archiveProject(1);
console.log("Archived Project: ", archiveResult1);
