import { exit } from "./cli/exit.js";
import { promptProject } from "./cli/projectPrompt.js";
import { promptTask } from "./cli/taskPrompt.js";
import { renderProjects } from "./projects/projectView.js";
import { renderTasks } from "./tasks/taskView.js";
import { promptUpdate } from "./cli/promptUpdateProject.js";
import { taskUpdate } from "./cli/promptUpdateTask.js";
import { promptDeleteTask } from "./cli/deleteTaskPrompt.js";
import { promptDeleteProject } from "./cli/deleteProjectPrompt.js";

// function to map user choice to appropriate controller
export async function route(choice, projectController, taskController) {
    switch (choice) {
        case "1": {
            projectController.handleAddProject(await promptProject());
            break;
        }
        case "2": {
            const { id, updates } = await promptUpdate();
            const success = projectController.handleUpdateProject(id, updates);
            console.log(success ? "Project updated successfully" : "Project update failed");
            break;
        }
        case "3": {
            const projects = projectController.handleListProjects();
            console.log(renderProjects(projects));
            break;
        }
        case "4":{
            const { id } = await promptDeleteProject();
            const success = projectController.handleDeleteProject(id);
            console.log(success ? "Project deleted successfully" : "Project deletion failed");
            break;
        }
        case "5": {
            taskController.handleAddTask(await promptTask());
            break;
        }
        case "6": {
            const { taskId, updates } = await taskUpdate();
            const successfulUpdate = taskController.handleUpdateTask(taskId, updates);
            console.log(successfulUpdate ? "Task updated successfully" : "Task update failed");
            break;
        }
        case "7": {
            const tasks = taskController.handleListTasks();
            console.log(renderTasks(tasks));
            break;
        }
        case "8": {
            const { taskId} = await promptDeleteTask();
            const success = taskController.handleDeleteTask(taskId);
            console.log(success ? "Task deleted successfully" : "Task deletion failed");
            break;
        }
        case "9": {
            exit();
            break;
        }
        default: {
            console.log("Invalid choice");
        }
    }
}
