import { createProject } from "./projectModel";
import { addProject, getProjects } from "./projectManager";
import { saveProjects } from "./projectStorage";

// handle addition of projects
export function handleAddProject(projectData){
    // call create function
    const project = createProject(projectData);

    // project creation failed
    if(!project) return false;

    //  addition of a project fails
    if(!addProject(project)) return false;

    // save current state of project collection
    const projects = getProjects();
    saveProjects(projects);

    // successful addition
    return true;
};