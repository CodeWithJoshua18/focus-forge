// render a task
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
        console.log("No tasks available");
        return;
    }

    // reuse renderTask to format each task
    const rendered = tasks.map(renderTask);

    // build one complete output string
    const output = rendered.join("\n");

    // single presentation output
    console.log(output);

    return output;
}