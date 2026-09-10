import { hasIncompleteTasks } from "../tasks/taskManager.js";


// storing projects in an array
 const projectList = [];

// add projects
export function addProject(project){
    projectList.push(project);
    return true;
}

// get/list projects
export function getProjects(){
    return projectList;
};


// update project
const editableProjectFields = [
    "name",
    "description",
    "deadline",
];

export function updateProject(id, updates){
    // nothing to update
    if(Object.entries(updates).length === 0){
        return false;
    };

    // find project
    const currentProject = projectList.find(project => project.id === id);

    // if project doesnt exist
    if(!currentProject){
        return false;
    };
    
    // track whether a field was updated
    let didProjectChange = false;
    
    Object.entries(updates).forEach(([Key, value]) => {
        // allow editable fields
        if(!editableProjectFields.includes(Key)){
            return;
        }

        // skip if value is same
        if(currentProject[Key] === value){
            return;
        }

        // update field
        currentProject[Key] = value;
        didProjectChange = true;
    })

    // update timestamp only if something changed
    if(didProjectChange){
        currentProject.updatedAt = new Date().toISOString();
    }

    return didProjectChange;
};

// delete project
export function deleteProject(projectId){
    const index = projectList.findIndex(currentProject => currentProject.id === projectId);

    // check if project exists
    if(index === -1) return false;

    // check if project has incomplete tasks
    if(hasIncompleteTasks(projectId)){
        return false;
    }

    // delete project
    projectList.splice(index, 1);

    return true;
};

// archive project
export function archiveProject(projectId){
    const projectIndex = projectList.findIndex(currentProject => currentProject.id === projectId);

    // check if project exists
    if(projectIndex === -1) return false;

    const currentProject = projectList[projectIndex];

    // check if it has incomplete tasks
    if(hasIncompleteTasks(projectId)){
        return false;
    };

    // check if project is already archived
    if(currentProject.archived) return false;
    
    // update fields
    currentProject.archived = true;
    currentProject.status = "completed";
    currentProject.updatedAt = new Date().toISOString();
    currentProject.completedAt = new Date().toISOString();

    return true;
};

// set projects
export function setProjects(projects){
    // clear collection
    projectList.length = 0;

    // copy projects
    projects.forEach(project => {
        projectList.push(project);
    })
};


// get projects by Id
export function getProjectById(projectId){
    const projects = getProjects();

    // get project that matches selected projectId
        const project = projects.find(project => project.id === projectId);

        // return project or null if not found
        return project || null;
};