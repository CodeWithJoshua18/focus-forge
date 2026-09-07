import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export async function promptTask() {
  // create interface
  const rl = readline.createInterface({ input, output });

  // ask questions one by one
  const taskId = await rl.question("Enter task ID: ");
  const title = await rl.question("Enter task name: ");
  const description = await rl.question("Enter task description (optional): ");
  const priority = await rl.question("Enter priority (High, Medium, Low): ");
  const projectId = await rl.question("Enter project Id: ");

  rl.close();

  // return structured object
  return {
    taskId,
    title,
    description,
    priority,
    projectId: projectId || null
  };
}
