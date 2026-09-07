import { displayMainMenu } from "./cli/mainMenu.js";
import { prompt } from "./cli/prompts.js";
import { route } from "./router.js";
import { loadProjects } from "./projects/projectFileStorage.js";
import { setProjects } from "./projects/projectManager.js";

async function startApp(){
    const projects = loadProjects();

    setProjects(projects);

    while (true){
        console.log(displayMainMenu());

        const choice = await prompt();

       await route(choice);
    };
}

startApp();