import { handleAddProject, handleListProjects } from "./projects/projectController.js";
import { handleAddTask, handleListTasks } from "./tasks/taskController.js";
import { exit } from "./cli/exit.js";
import { promptProject } from "./cli/projectPrompt.js";
import { promptTask } from "./cli/taskPrompt.js";

// function to map user choice to appropriate controller
export async function route(choice) {
    switch (choice) {
        case "1":
            handleAddProject(await promptProject());
            break;
        case "2":
            console.log(handleListProjects());
            break;
        case "3":
            handleAddTask(await promptTask());
            break;
        case "4":
            console.log(handleListTasks());
            break;
        case "5":
            exit();
            break;
        default:
            console.log("Invalid choice");
    }
}
