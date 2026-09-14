import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function promptUpdate(){
    // create interface
    const rl = readline.createInterface({ input, output});

    // ask fields to be updated
    const id = await rl.question("Enter project Id: ");
    const name = await rl.question("Enter project name: ");
    const description = await rl.question("Enter project description: ");
    const deadline = await rl.question("Enter project deadline: ");

    rl.close();

    const updates = {};

    // check update on name field
    if(name.trim()){
        updates.name = name.trim();
    }

    // check update on description field
    if(description.trim()){
        updates.description = description.trim();
    }

    // check update on deadline field
    if(deadline.trim()){
        updates.deadline = deadline.trim();
    }

    // return project
   return {
        id,
        updates
    }

}