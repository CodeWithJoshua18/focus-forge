// save projects
export function saveProjects(projectList){
    const projectJSON = JSON.stringify(projectList);
    localStorage.setItem("projects", projectJSON);
};

// load projects
export function loadProjects(){
    const projectJSON = localStorage.getItem("projects");

    // handle first launch
    if(!projectJSON){
        return [];
    }

    // load projects
    return JSON.parse(projectJSON);
};