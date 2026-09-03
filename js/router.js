import { handleAddProject, handleListProjects } from "./projects/projectController.js";
import { handleAddTask, handleListTasks } from "./tasks/taskController.js";
import { exit } from "./cli/exit.js";

// function to map user choice to appropriate controller
export function route(choice) {
    switch (choice) {
        case "1":
            handleAddProject();
            break;
        case "2":
            handleListProjects();
            break;
        case "3":
            handleAddTask();
            break;
        case "4":
            handleListTasks();
            break;
        case "5":
            exit();
            break;
        default:
            console.log("Invalid choice");
    }
}
