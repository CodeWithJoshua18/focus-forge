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

// updateTask
const editableFields = [
    "title",
    "description",
    "priority",
    "projectId"
]
export function updateTask(taskId, updates) {
    if (Object.entries(updates).length === 0) return true;
    const task = taskList.find(task => task.taskId === taskId);
    if (!task) return false;
    if (task.status === "completed") return false;

    Object.entries(updates)
        .filter(([key]) => editableFields.includes(key))
        .forEach(([key, value]) => {
            task[key] = value;
            return true;
        });

    task.updatedAt = new Date().toISOString();
    
}


