// render a single task
function renderTask(task){
    // return formatted string using template literal
   return `
----------------------------------------
Task ID      : ${task.taskId}
Title        : ${task.title}
Description  : ${task.description}
Priority     : ${task.priority}
Project ID   : ${task.projectId}
Status       : ${task.status}
----------------------------------------`;
};

// render collection of tasks
export function renderTasks(tasks){
    // check if the collection is empty
    if(tasks.length === 0){
        return "No tasks available";
    }

    //  format each task
    const rendered = tasks.map(renderTask);

    // combine all rendered tasks
    return rendered.join("\n");
}