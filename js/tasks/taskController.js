import { addTask, getTasks, markAsCompleted, renderTasks, updateTask, deleteTask, listTasks, getUnassignedTasks, getTaskById, getTaskByProjectId} from "./taskManager.js";
import { saveTasks } from "./taskStorage.js";
import { createTask } from "./taskModel.js";
import { archiveProject } from "../projects/projectManager.js";

// handle addition of tasks
export function handleAddTask(taskData){
    // create a task
    const task = createTask(taskData);

    // task creation failed
    if (!task) return false;

    // addition of task failed
    if (!addTask(task)) return false;

    //  save task
    const saveTask = getTasks();
    saveTasks(saveTask);
    
    // return success 
    return true;

    // display tasks
    renderTasks(tasks);
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

// handle updating of tasks
export function handleUpdateTask(taskId, updates){
    // call update task function
    const updatedTask = updateTask(taskId, updates);

    // task not found
    if(!updatedTask) return false;

    // save tasks
    const tasks = getTasks();
    saveTasks(tasks);

    // render tasks
    renderTasks(tasks);

    // handle successful update
    return true;
};

// handle deletion of tasks
export function handleDeleteTask(taskId){
    // call delete task function
    const deletedTask = deleteTask(taskId);

    // task not found
    if(!deletedTask) return false;

    // persist new state after deletion
    const tasks = getTasks();
    saveTasks(tasks);

    // render tasks
    renderTasks(tasks);

    // handle successful deletion
    return true;
};

// handle listing of tasks
export function handleListTasks(){
    const tasks = listTasks();

    return tasks;
};

// handle listing of unassigned tasks
export function handleGetUnassignedTasks(){
    const unassignedTasksList = getUnassignedTasks();
    
    return unassignedTasksList;
};

// handle fetching of a task by id
export function handleGetTaskById(taskId){
    const task = getTaskById(taskId);

    return task;
};

// handle fetching tasks by project Id
export function handleGetTaskByProjectId(projectId){
    const task = getTaskByProjectId(projectId);

    return task;
};