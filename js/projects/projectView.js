// render a project
function renderProject(project){
    return `
    Project Id: ${project.id}
    Project Name: ${project.name}
    Project Description: ${project.description}
    Project Deadline: ${project.deadline}
    Project Status: ${project.status}
    `;
};

// render collection of projects
export function renderProjects(projects){
    // check if collection is empty
    if(projects.length === 0){
        return "No projects available"
    };

    // reuse renderProject to format each project
    const rendered = projects.map(renderProject);

    // build one output string
    const output = rendered.join("\n");

    // single presentation output
    console.log(output);

    return output;
    
};