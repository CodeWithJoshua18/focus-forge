import { handleAddProject, handleListProjects, handleUpdateProject } from "./projects/projectController.js";
import { handleAddTask, handleListTasks, handleUpdateTask } from "./tasks/taskController.js";
import { exit } from "./cli/exit.js";
import { promptProject } from "./cli/projectPrompt.js";
import { promptTask } from "./cli/taskPrompt.js";
import { renderProjects } from "./projects/projectView.js";
import { renderTasks } from "./tasks/taskView.js";
import { promptUpdate } from "./cli/promptUpdateProject.js";
import { taskUpdate } from "./cli/promptUpdateTask.js";

// function to map user choice to appropriate controller
export async function route(choice) {
    switch (choice) {
        case "1": {
            handleAddProject(await promptProject());
            break;
        }
        case "2": {
            const { id, updates } = await promptUpdate();
            const success = handleUpdateProject(id, updates);
            console.log(success ? "Project updated successfully" : "Project update failed");
            break;
        }
        case "3": {
            const projects = handleListProjects();
            console.log(renderProjects(projects));
            break;
        }
        case "4": {
            handleAddTask(await promptTask());
            break;
        }
        case "5": {
            const { taskId, updates } = await taskUpdate();
            const successfulUpdate = handleUpdateTask(taskId, updates);
            console.log(successfulUpdate ? "Task updated successfully" : "Task update failed");
            break;
        }
        case "6": {
            const tasks = handleListTasks();
            console.log(renderTasks(tasks));
            break;
        }
        case "7": {
            exit();
            break;
        }
        default: {
            console.log("Invalid choice");
        }
    }
}
