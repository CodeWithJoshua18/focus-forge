import { describe, test, expect } from "vitest";

import { createProject } from "../../js/projects/projectModel.js";
import {
    addProject,
    deleteProject,
    getProjectById,
    setProjects
} from "../../js/projects/projectManager.js";

import { createTask } from "../../js/tasks/taskModel.js";
import {
    addTask,
    setTasks
} from "../../js/tasks/taskManager.js";


describe("deleteProject", () => {

    test("does not delete a project with incomplete tasks", () => {

        // Arrange
        setProjects([]);
        setTasks([]);

        const project = createProject({
            id: "1",
            name: "Focus Forge"
        });

        const task = createTask({
            taskId: "1",
            title: "Build testing",
            description: "Learn TDD",
            priority: "high",
            projectId: "1"
        });

        addProject(project);
        addTask(task);

        // Act
        const result = deleteProject("1");

        // Assert
        expect(result).toBe(false);
        expect(getProjectById("1")).not.toBeNull();
    });

});