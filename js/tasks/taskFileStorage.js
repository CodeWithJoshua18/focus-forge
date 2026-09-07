import fs from "node:fs";
import path from "node:path";

// build a safe path to the file
const filePath = path.join(process.cwd(), "data", "tasks.json");

// save tasks
export function saveTasks(taskList) {
  const data = JSON.stringify(taskList, null, 2);
  fs.writeFileSync(filePath, data, "utf-8");
}

// load tasks
export function loadTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // if file doesn’t exist or is empty, return empty array
    return [];
  }
}