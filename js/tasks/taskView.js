// render a task
function renderTask(task){
    // return formatted string using template literal
    return `
    Task ID: ${task.taskId}
    Title: ${task.title}
    Description: ${task.description}
    Priority: ${task.priority}
    Project ID: ${task.projectId}
    Status: ${task.status}
    `
};