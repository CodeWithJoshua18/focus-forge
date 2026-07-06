// stroing projects in an array
export const projectList = [];

// add projects
export function addProject(project){
    projectList.push(project);
    return project;
}

// list projects
export function listProjects(){
    if(projectList.length === 0){
        return "No projects...";
    }else{
        projectList.map((currentProject, index) => {
            return `${index + 1}`
        })
    }
}

// update project
export function updateProject(id, updates){
    // nothing to update
    if(Object.entries(updates).length === 0){
        return true;
    }

    // find project
    const currentProject = projectList.find(project => project.id === id);

    // if project doesnt exist
    if(!currentProject){
        return false;
    }

    // update

}