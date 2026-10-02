import { describe, test, expect, vi } from "vitest";

import { createProjectController } from "../../js/projects/projectController.js";
import { addProject, setProjects } from "../../js/projects/projectManager.js";
import {
  addTask,
  setTasks,
  markAsCompleted,
} from "../../js/tasks/taskManager.js";
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
      name: "Test handle delete controller",
    });

    const task = createTask({
      taskId: 1,
      title:
        "Test handle delete controller to push upward the required information",
      description: "testing",
      priority: "medium",
      projectId: "1",
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
      name: "Successful deletion",
    });

    const task = createTask({
      taskId: "2",
      title: "Task 2",
      description: "deleting task 2",
      priority: "high",
      projectId: "2",
    });

    addProject(project);
    addTask(task);
    markAsCompleted("2");

    // Act
    const deleteResult = projectController.handleDeleteProject("2");

    // Assert
    expect(deleteResult).toBe("Project_Deleted");
  });

  test("handleDeleteProject calls persistence save when the project is sucessfully deleted", () => {
    // Arrange
    setProjects([]);

    const projectPersistence = {
      save: vi.fn(),
    };

    const projectController = createProjectController(projectPersistence);

    const project = createProject({
      id: "1",
      name: "persistence test",
    });

    addProject(project);

    // Act
    const deleteResult = projectController.handleDeleteProject("1");

    // Assert
    expect(projectPersistence.save).toHaveBeenCalled();
  });

  test("handleDelete does not call persistence save when a project has incomplete tasks", () => {
    // Arrange
    setProjects([]);
    setTasks([]);

    const project2 = createProject({
      id: "2",
      name: "Persistence test",
    });

    const task2 = createTask({
      taskId: 1,
      title: "testing persistence",
      description:
        "when deletion fails, controller should not save the collection",
      priority: "high",
      projectId: "2",
    });

    const projectPersistence = {
      save: vi.fn(),
    };

    const projectController = createProjectController(projectPersistence);

    addProject(project2);
    addTask(task2);

    // Act
    const deleteResult2 = projectController.handleDeleteProject("2");

    // Assert
    expect(deleteResult2).toBe("Project_Has_Incomplete_Tasks");
    expect(projectPersistence.save).not.toHaveBeenCalled();
  });
});

describe("handleAddProject", () => {
  test("return a message when project creation fails due to missing fields", () => {
    // Arrange
    setProjects([]);

    const projectPersistence = {
      save: () => {},
    };

    const projectController = createProjectController(projectPersistence);

    // Act
    const result3 = projectController.handleAddProject({
      id: "",
      name: "",
    });

    // Assert
    expect(result3).toBe("Project_Name_Or_Id_Missing");
  });

  test("handleAddProject does not call persistence save when project creation fails", () => {
    // Arrange
    addProject([]);

    const projectPersistence = {
        save: vi.fn(),
    };

    const projectController = createProjectController(projectPersistence);

    // Act
    const result4 = projectController.handleAddProject({
      id: "1",
      name: ""
    });

    // Assert
    expect(projectPersistence.save).not.toHaveBeenCalled();
  });
});
