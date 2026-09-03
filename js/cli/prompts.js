// function to prompt user for action
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function prompt(){
    // create interface
    const rl = readline.createInterface({ input, output});

    // ask question
    const answer = await rl.question("Choose an option: ");

    rl.close();

    return answer;
}