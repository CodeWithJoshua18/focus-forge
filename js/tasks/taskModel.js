// function to handle creation of tasks
export function createTask(taskId, title, description, priority, projectId) {
    const now = new Date().toISOString();
    const task = ({
        taskId,
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




