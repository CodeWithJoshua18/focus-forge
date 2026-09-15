export function createProjectPersistence(storage){
    return{
        save(projects){
            storage.saveProjects(projects);
        },

        load(){
            return storage.loadProjects();
        }
    }
}