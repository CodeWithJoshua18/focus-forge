// function to handle creation of tasks
export function createTask(id, title, description, priority, projectId) {
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




