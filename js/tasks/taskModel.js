// function to handle creation of tasks
export function createTask(
    taskId,
    title,
    description,
    priority,
    projectId = null
) {
    const now = new Date().toISOString();

    return {
        taskId,
        title,
        description,
        priority,
        projectId,
        status: "pending",
        createdAt: now,
        updatedAt: now
    };
}




