import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function promptDeleteTask(){
    // create interface
    const rl = readline.createInterface({ input, output });

    // get taskId to delete
    const taskId = await rl.question("Enter task Id to delete: ")

    rl.close();

    // return
    return{
        taskId
    }
}