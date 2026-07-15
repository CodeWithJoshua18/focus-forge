import { addTask, getTasks } from "./taskManager.js";
import { saveTasks } from "./taskStorage.js";
import { createTask } from "./taskModel.js";


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