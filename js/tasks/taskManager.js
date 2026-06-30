import { createTask } from "./taskModel.js";

// persistently store tasks 
const taskList = [];

// function to add tasks
export function addTask(task){
     taskList.push(task);
}

// function to list all tasks
export function listTasks(){
    if(taskList.length === 0){
        console.log('No tasks...');
    } else{
        console.log("Yout tasks: ", taskList); 
    }
}



