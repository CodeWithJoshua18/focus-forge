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