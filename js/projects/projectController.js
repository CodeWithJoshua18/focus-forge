import { createProject } from "./projectModel.js";
import { addProject, deleteProject, getProjects, updateProject, archiveProject, getProjectById } from "./projectManager.js";



export function createProjectController(projectPersistence) {
    // write operations

    // handle addition of projects
    function handleAddProject(projectData) {
        // call create function
        const project = createProject(projectData);

        // project creation failed
        if (!project) return false;

        // addition of a project fails
        if (!addProject(project)) return false;

        // save current state of project collection
        projectPersistence.save(getProjects());

        // successful addition
        return true;
    }

    // handle deletion of projects
     function handleDeleteProject(id){
       // call delete function
        const deletedProject = deleteProject(id);

       // project deletion failed
       if(!deletedProject) return false;

    // persist new state after deletion
        projectPersistence.save(getProjects());

    // handle successfull deletion
    return true;
}; 

    // handle updating a project
     function handleUpdateProject(id, updates){
    // call the update function
    const updatedProject = updateProject(id, updates);

    // project not found
    if(!updatedProject) return false;

    // save project
    projectPersistence.save(getProjects());

    // handle successful update
    return true;
};

    // handle project archiving
     function handleArchiveProject(projectId){
      const archivedproject = archiveProject(projectId);

    // project archiving failed
    if(!archivedproject) return false;

    // persist changes
    projectPersistence.save(getProjects());

    return true;
};

   // read operations

// handle listing of projects
 function handleListProjects(){
   return getProjects();
};

// handling fetching of project by Id
function handleGetProjectById(projectId){
    return getProjectById(projectId);
};

    return {
        handleAddProject,
        handleDeleteProject,
        handleUpdateProject,
        handleArchiveProject,
        handleListProjects,
        handleGetProjectById
    };
}

