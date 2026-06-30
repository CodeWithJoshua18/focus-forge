const taskList = [];

// function to add tasks
export function addTask(task) {
    taskList.push(task);
    return task; 
}

// function to list tasks
export function listTasks() {
    if (taskList.length === 0) {
        return "No tasks..."; 
    } else {
        return taskList.map((task, index) => {
            return `${index + 1}. [${task.status}] ${task.title} (ID: ${task.taskId}) Priority: ${task.priority}`;
        }).join("\n");
    }
}

// function to delete tasks
export function deleteTask(taskId) {

    const index = taskList.findIndex(task => task.id === taskId);

    if (index === -1) {
        return false;
    }

    taskList.splice(index, 1);

    return true;

}

