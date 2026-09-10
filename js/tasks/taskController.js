import { addTask, getTasks, markAsCompleted, updateTask, deleteTask, getUnassignedTasks, getTaskById, getTaskByProjectId} from "./taskManager.js";
import { saveTasks } from "./taskFileStorage.js";
import { createTask } from "./taskModel.js";
import { archiveProject } from "../projects/projectManager.js";

// handle addition of tasks
export function handleAddTask(taskData) {

    // create a task
    const task = createTask(
        taskData.taskId,
        taskData.title,
        taskData.description,
        taskData.priority,
        taskData.projectId
    );

    // task creation failed
    if (!task) return false;

    // addition of task failed
    if (!addTask(task)) return false;

    // save current task collection
    saveTasks(getTasks());

    // successful creation
    return true;
}

// handle completion of tasks
export function handleCompleteTask(taskId){
    // get tasks before chnaging state
    const task = getTaskById(taskId);

    // task does not exist
    if(!task) return false;

    // mark task as complete
    const success = markAsCompleted(taskId);

    // completion failed
    if(!success) return false;

    // persist current state
    saveTasks(getTasks());

    // archive project if applicable
    if(task.projectId){
        archiveProject(task.projectId);
    }

    return true;

};

   javascript
// handle updating of tasks
export function handleUpdateTask(taskId, updates) {

    // call update task function
    const success = updateTask(taskId, updates);

    // update failed
    if (!success) return false;

    // persist current state
    saveTasks(getTasks());

    // successful update
    return true;
}



// handle deletion of tasks
export function handleDeleteTask(taskId){
    // call delete task function
    const success = deleteTask(taskId);

    // task not found
    if(!success) return false;

    // persist new state after deletion
    saveTasks(getTasks());

    // handle successful deletion
    return true;
};

// handle listing of tasks
export function handleListTasks(){
    return getTasks();
};

// handle listing of unassigned tasks
export function handleGetUnassignedTasks(){
    return getUnassignedTasks();
};

// handle fetching of a task by id
export function handleGetTaskById(taskId){
   return getTaskById(taskId);
};

// handle fetching tasks by project Id
export function handleGetTaskByProjectId(projectId){
   return getTaskByProjectId(projectId);
};