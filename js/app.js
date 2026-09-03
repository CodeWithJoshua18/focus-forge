import { displayMainMenu } from "./cli/mainMenu.js";
import { prompt } from "./cli/prompts.js";
import { route } from "./router.js";

async function startApp(){
    while (true){
        console.log(displayMainMenu());

        const choice = await prompt();

        route(choice);
    };
}

startApp();