// function to handle creation of tasks
function createTask(id, title, description, priority, projectId) {
    const now = new Date().toISOString();
    const task = ({
        id,
        title,
        description,
        priority,
        projectId,
        status: 'pending',
        createdAt: now,
        updatedAt: now  
    });
    return task;
}

const newTask = createTask(1, "Fix bug", "Resolve login issue", "high", 101);
console.log(newTask);


