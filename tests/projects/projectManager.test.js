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
        expect(result).toBe("Project_Has_Incomplete_Tasks");
        expect(getProjectById("1")).not.toBeNull();
    });

    test("returns not found result if there is no matching project ID", () => {
        // Arrange
        setProjects([]);
        setTasks([]);

        // Act
        const notFoundProject = deleteProject("2");

        // Assert
        expect(notFoundProject).toBe("Project_Not_Found");
    });

    test("return message success once project is deleted successfully", () => {
        // Arrange
        setProjects([]);
        setTasks([]);

        const project = createProject({
            id: "1",
            name: "Focus-Forge"
        });

        addProject(project);

        // Act
        const successfullDeletion = deleteProject("1");

        // Assert
        expect(successfullDeletion).toBe("Project_Deleted");
        expect(getProjectById("1")).toBeNull();
    });

});