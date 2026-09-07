import fs from "node:fs";
import path from "node:path";

// build a safe path to the file
const filePath = path.join(process.cwd(), "data", "projects.json");

// save projects
export function saveProjects(projectList) {
  const data = JSON.stringify(projectList, null, 2);
  fs.writeFileSync(filePath, data, "utf-8");
}

// load projects
export function loadProjects() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // if file doesn’t exist or is empty, return empty array
    return [];
  }
}
