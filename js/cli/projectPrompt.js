import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function promptProject() {
  // create interface
  const rl = readline.createInterface({ input, output });

  // ask questions one by one
  const id = await rl.question("Enter project ID: ");
  const name = await rl.question("Enter project name: ");
  const description = await rl.question("Enter project description (optional): ");
  const deadline = await rl.question("Enter project deadline (optional): ");

  rl.close();

  // return structured object
  return {
    id,
    name,
    description,
    deadline
  };
}
