import { handleAddProject, handleListProjects } from "./projects/projectController.js";
import { handleAddTask, handleListTasks } from "./tasks/taskController.js";
import { exit } from "./cli/exit.js";
import { promptProject } from "./cli/projectPrompt.js";
import { promptTask } from "./cli/taskPrompt.js";
import { renderProjects } from "./projects/projectView.js";
import { renderTasks } from "./tasks/taskView.js";

// function to map user choice to appropriate controller
export async function route(choice) {
    switch (choice) {
        case "1":
            handleAddProject(await promptProject());
            break;
        case "2":
            break;    
        case "3":
            const projects = handleListProjects();
            console.log(renderProjects(projects));
            break;
        case "4":
            handleAddTask(await promptTask());
            break;
        case "5":
            break;    
        case "6":
            const tasks = handleListTasks();
            console.log(renderTasks(tasks));
            break;
        case "7":
            exit();
            break;
        default:
            console.log("Invalid choice");
    }
}
