import { addTask, getTasks, markAsCompleted, renderTasks } from "./taskManager.js";
import { saveTasks } from "./taskStorage.js";
import { createTask } from "./taskModel.js";
import { archiveProject } from "../projects/projectManager.js";

// handle task adding
export function handleAddTask(taskData){
    // create a task
    const task = createTask(taskData);

    // handle creation of task failure
    if (!task) return false;

    // call add task function
    if (!addTask(task)) return false;

    // call save task
    const saveTask = getTasks();
    saveTasks(saveTask);
    
    // return success if everything runs smoothly
    return true;
};

// handle completion of tasks
export function handleCompleteTask(taskId){
    // mark task as completed
    const completedTask = markAsCompleted(taskId);

    // task not found
    if (!completedTask) return false;

    // save task
    const tasks = getTasks();
    saveTasks(tasks);

    // if task belongs to a project,archive it
    if (completedTask.projectId){
        archiveProject(completedTask.projectId);
    }

    // display tasks
    renderTasks(tasks);

    return true;
};