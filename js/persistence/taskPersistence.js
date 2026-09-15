export function createTaskPersistence(storage){
    return{
        save(tasks){
            storage.saveTask(tasks);
        },

        load(){
            return storage.loadTasks();
        }
    }
}