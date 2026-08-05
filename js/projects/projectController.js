import { createProject } from "./projectModel";
import { addProject, deleteProject, getProjects, renderProjects, updateProject, archiveProject, listProjects, getProjectById } from "./projectManager";
import { saveProjects } from "./projectStorage";

// write operations

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

    // render projects
    renderProjects(projects);
};

// handle deletion of projects
export function handleDeleteProject(id){
    // call delete function
    const deletedProject = deleteProject(id);

    // project deletion failed
    if(!deletedProject) return false;

    // persist new state after deletion
    const projects = getProjects();
    saveProjects(projects);

    // handle successfull deletion
    return true;
};

// handle updating a project
export function handleUpdateProject(id, updates){
    // call the update function
    const updatedProject = updateProject(id, updates);

    // project not found
    if(!updatedProject) return false;

    // save project
    const projects = getProjects();
    saveProjects(projects);

    // handle successful update
    return true;
};

// handle project archiving
export function handleArchiveProject(projectId){
    const archivedproject = archiveProject(projectId);

    // project archiving failed
    if(!archivedproject) return false;

    // persist changes
    const projects = getProjects();
    saveProjects(projects);

    return true;
};

// read operations

// handle listing of projects
export function handleListProjects(){
    const projectList = listProjects();

    return projectList;
};

// handling fetching of project by Id
export function handleGetProjectById(projectId){
    const project = getProjectById(projectId);

    return project;
};