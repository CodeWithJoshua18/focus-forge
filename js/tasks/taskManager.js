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
        return taskList.map((currentTask, index) => {
            return `${index + 1}. [${currentTask.status}] ${currentTask.title} (ID: ${currentTask.taskId}) Priority: ${currentTask.priority}`;
        }).join("\n");
    }
}

// deleteTask
export function deleteTask(taskId) {
    const index = taskList.findIndex(currentTask => currentTask.taskId === taskId);
    if (index === -1) return false;
    taskList.splice(index, 1);
    return true;
}

// markAsCompleted
export function markAsCompleted(taskId) {
    const currentTask = taskList.find(t => t.taskId === taskId);
    
    // task not found
    if (!currentTask) return false;

    // check if task is already marked aa complete
    if (currentTask.status === "completed") return true;
    currentTask.status = "completed";

    // update
    currentTask.updatedAt = new Date().toISOString();
    return currentTask;
};

// Editable fields whitelist
const editableFields = [
    "title",
    "description",
    "priority",
    "projectId"
];

// Update an existing task
export function updateTask(taskId, updates) {

    // Nothing to update
    if (Object.entries(updates).length === 0) {
        return true;
    }

    // Find the task
    const currentTask = taskList.find(t => t.taskId === taskId);

    // Task does not exist
    if (!currentTask) {
        return false;
    }

    // Completed tasks are immutable
    if (currentTask.status === "completed") {
        return false;
    }

    // Track whether any valid field was updated
    let didAnythingChange = false;

    Object.entries(updates).forEach(([key, value]) => {

        // Ignore immutable fields
        if (!editableFields.includes(key)) {
            return;
        }

        // Skip if the value hasn't actually changed
        if (currentTask[key] === value) {
            return;
        }

        // Apply update
        currentTask[key] = value;
        didAnythingChange = true;
    });

    // Update timestamp only if something changed
    if (didAnythingChange) {
        currentTask.updatedAt = new Date().toISOString();
    }

    return true;
}

// check if a project has incomplete tasks
export function hasIncompleteTasks(projectId){
    return taskList.some(task => task.status !== 'completed' && task.projectId === projectId);
};

// function to set tasks
export function setTasks(tasks){
    // clear collection
    taskList.length = 0;

    // copy tasks
    tasks.forEach(task => {
        taskList.push(task);
    })
};

// function to get tasks
export function getTasks(){
    return taskList;
};

// function to render tasks
export function renderTasks(taskId){
    const tasks = getTasks();
    return tasks;
};
