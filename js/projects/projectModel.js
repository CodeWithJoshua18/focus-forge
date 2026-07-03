// function to create a project
export function createProject({
    id,
    name,
    description = "",
    deadline = null,
}) {
    // validate name and id inputs
    if (!id || !name || !name.trim()){
        return false;
    }
    const now = new Date().toISOString();

    return {
        id,
        name,
        description,
        deadline,
        status: "active",
        archived: false,
        createdAt: now,
        updatedAt:  now,
        completedAt: null,
    };
}
