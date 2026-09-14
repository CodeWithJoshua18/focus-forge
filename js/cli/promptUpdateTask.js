import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function taskUpdate(){
    // create interface
    const rl = readline.createInterface({ input, output});

    // ask fields to be updated
    const taskId = await rl.question("Enter task Id: ");
    const title = await rl.question("Enter new task name: ");
    const description = await rl.question("Enter new task description: ");
    const priority = await rl.question("Enter new task priority: ");
    const deadline = await rl.question("Enter new deadline: ");

    rl.close();

    const updates = {};

    // check update on each field
    if(title.trim()){
        updates.title = title.trim();
    }

    if(description.trim()){
        updates.description = description.trim();
    }

    if(priority.trim()){
        updates.priority = priority.trim();
    }

    if(deadline.trim()){
        updates.deadline = deadline.trim();
    }

    // return updated task
    return{
        taskId,
        updates
    }

}