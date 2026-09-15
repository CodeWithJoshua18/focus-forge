import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function promptDeleteProject(){
    // create interface
    const rl = readline.createInterface({ input, output});

    // get project id to delete
    const id = await rl.question("Enter project Id to delete: ");

    rl.close();

    // return
    return{
        id
    }
}