import { displayMainMenu } from "./cli/mainMenu.js";
import { prompt } from "./cli/prompts.js";
import { route } from "./router.js";
import { loadProjects } from "./projects/projectFileStorage.js";
import { setProjects } from "./projects/projectManager.js";
import { loadTasks } from "./tasks/taskFileStorage.js";
import { setTasks } from "./tasks/taskManager.js";

async function startApp(){
    // hydrate project data
    const projects = loadProjects();
    setProjects(projects);

    // hydrate task data
    const tasks = loadTasks();
    setTasks(tasks);

    while (true){
        console.log(displayMainMenu());

        const choice = await prompt();

       await route(choice);
    };
}

startApp();