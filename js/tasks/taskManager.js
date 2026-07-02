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

// deleteTask
export function deleteTask(taskId) {
    const index = taskList.findIndex(task => task.taskId === taskId);
    if (index === -1) return false;
    taskList.splice(index, 1);
    return true;
}

// markAsCompleted
export function markAsCompleted(taskId) {
    const task = taskList.find(task => task.taskId === taskId);
    if (!task) return false;
    if (task.status === "completed") return true;
    task.status = "completed";
    task.updatedAt = new Date().toISOString();
    return true;
}

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
    const task = taskList.find(currentTask => currentTask.id === taskId);

    // Task does not exist
    if (!task) {
        return false;
    }

    // Completed tasks are immutable
    if (task.status === "completed") {
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
        if (task[key] === value) {
            return;
        }

        // Apply update
        task[key] = value;
        didAnythingChange = true;
    });

    // Update timestamp only if something changed
    if (didAnythingChange) {
        task.updatedAt = new Date().toISOString();
    }

    return true;
}


