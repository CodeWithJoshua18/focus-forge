// saving tasks
export function saveTasks(taskList){
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem("tasks", taskJSON);
};

// load tasks
export function loadTasks(){
    const taskJSON = localStorage.getItem("tasks");

    // handle first launch
    if(!taskJSON){
        return [];
    }

    // load tasks
    return JSON.parse(taskJSON);
};