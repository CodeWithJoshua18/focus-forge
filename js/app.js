import { displayMainMenu } from "./cli/mainMenu.js";
import { prompt } from "./cli/prompts.js";
import { route } from "./router.js";

import { projectFileStorage } from "./projects/projectFileStorage.js";
import { taskFileStorage } from "./tasks/taskFileStorage.js";

import { createProjectPersistence } from "./persistence/projectPersistence.js";
import { createTaskPersistence } from "./persistence/taskPersistence.js";

import { setProjects } from "./projects/projectManager.js";
import { setTasks } from "./tasks/taskManager.js";

async function startApp(){

    // choose persistence implementations
    const projectPersistence = createProjectPersistence(projectFileStorage);

    const taskPersistence = createTaskPersistence(taskFileStorage);

    // hydrate project data
    const projects = projectPersistence.load();
    setProjects(projects);

    // hydrate task data
    const tasks = taskPersistence.load();
    setTasks(tasks);

    while (true){
        console.log(displayMainMenu());

        const choice = await prompt();

        await route(choice);
    }
}

startApp();