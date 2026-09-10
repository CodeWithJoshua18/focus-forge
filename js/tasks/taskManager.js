const taskList = [];

// function to add tasks
export function addTask(task) {
    taskList.push(task);
    return true; 
}

// function to get/ list tasks
export function getTasks(){
    return taskList;
};


// deleteTask
export function deleteTask(taskId) {
    const index = taskList.findIndex(currentTask => currentTask.taskId === taskId);

    // task not found
    if (index === -1) return false;

    // proceed to deleting
    taskList.splice(index, 1);

    return true;
}

// markAsCompleted
export function markAsCompleted(taskId) {
    const currentTask = taskList.find(t => t.taskId === taskId);
    
    // task not found
    if (!currentTask) return false;

    // check if task is already marked aa complete
    if (currentTask.status === "completed") return false;
    currentTask.status = "completed";

    // update
    currentTask.updatedAt = new Date().toISOString();
    
    return true;
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
        return false;
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

    return didAnythingChange;
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


// keep only tasks without a project
export function getUnassignedTasks(){
    return taskList.filter(task => task.projectId === null);
}

// get tasks by their id's
export function getTaskById(taskId){
    return taskList.find(task => task.taskId === taskId) || null;
}

// get tasks attached to a project
export function getTaskByProjectId(projectId){
    return taskList.filter(task => task.projectId === projectId);
}
