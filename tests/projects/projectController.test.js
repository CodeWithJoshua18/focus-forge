import { describe, test, expect } from "vitest";

import { createProjectController } from "../../js/projects/projectController.js";
import { addProject, setProjects } from "../../js/projects/projectManager.js";
import { addTask, setTasks, markAsCompleted } from "../../js/tasks/taskManager.js";
import { createProject } from "../../js/projects/projectModel.js";
import { createTask } from "../../js/tasks/taskModel.js";

describe("handleDeleteProject", () => {
    test("returns Project_Not_Found when deleting a non-existent project", () => {
    // Arrange
    setProjects([]);
    setTasks([]);

    // create controller with persistence dependency
    const projectPersistence = {
      save: () => {},
    };
        const projectController = createProjectController(projectPersistence);
    // Act
    const deleteController = projectController.handleDeleteProject("2");

    // Assert
    expect(deleteController).toBe("Project_Not_Found");
});

    test("returns Project_Has_Incomplete_Tasks when user tries to delete a project with pending tasks", () => {
        // Arrange
        setProjects([]);
        setTasks([]);

        const project = createProject({
            id: "1",
            name: "Test handle delete controller"
        });

        const task = createTask({
            taskId: 1,
            title: "Test handle delete controller to push upward the required information",
            description: "testing",
            priority: "medium",
            projectId: "1"
        });
        addProject(project);
        addTask(task);

        // Act
        const projectPersistence = {
         save: () => {},
        };
        const projectController = createProjectController(projectPersistence);
        const deleteProject = projectController.handleDeleteProject("1");

        // Assert
        expect(deleteProject).toBe("Project_Has_Incomplete_Tasks");
    });

    test("returns Project_Deleted message when project deletion has met all requirements", () => {
    // Arrange
    setProjects([]);
    setTasks([]);

    const projectPersistence = {
        save: () => {},
    };

    const projectController = createProjectController(projectPersistence);

    const project = createProject({
        id: "2",
        name: "Successful deletion"
    });

    const task = createTask({
        taskId: "2",
        title: "Task 2",
        description: "deleting task 2",
        priority: "high",
        projectId: "2"
    });

    addProject(project);
    addTask(task);
    markAsCompleted("2");

    // Act
    const deleteResult = projectController.handleDeleteProject("2");

    // Assert
    expect(deleteResult).toBe("Project_Deleted");
});
});