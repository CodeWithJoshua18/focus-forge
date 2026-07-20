# Study Journal

## Date
Monday 29 June 2026

## What did I learn today? - Modeling a Task
   - Touched on variables and objects
   - Defined objects as a collection of related properties
   - Objects have methods attached to them. I.e Task object method can be adding a task
   - A good ID should be unique,satble, easy to compare

## What problem does this solve in Focus Forge?
   - Modeling a task allows for definition of what an object should have before any implementation is done.
   - Serves as the guidline to what methods can be applied to defined objects-tasks, in this case.
   - Solves the problem of having separate variables defining properties for one task.

## Which files changed?
   - taskModel.js was modified to define what a task is.
   - I created a createTask function that creates and returns a single task.
## What confused me?
  - Chapter 1 concepts were relatively easy to grasp given they are the introductory part of the project.
## One thing I want to explore tomorrow.
 - Building the second part of the architecture, the Task Manager

 ## Date
 Tuesday 30th June 2026

 ## Learning Objectives
    - Arrays as a collection
    - State
    - Encapsulation
    - Single source of truth
    - Separation of concerns
    - ES Modules

 ## What did I learn today? - Task Manager. Where tasks should live
    - Responsible for storing,adding,deleting, and returning tasks.
    - A predicate is a function that returns true or false.
    - An operation is idempotent if running it once has the same final effect as running it multiple times.
 ## What problem does this solve in Focus Forge?
    - Every learning objective for the day touches on the concept of single responsibility,in this case,knowing where one action ,one entitiy lives.
 ## Which files changed?
    - Today, I worked on taskManager.js file.
    - Created addTask,listTask,deleteTask,markAsCompleted functions.
 ## What confused me?
    - Before diving into the concept of ES6 modules, the most challenging part was how to expose functions to other files.
 ## One thing I want to explore tomorrow.
   - I will be exploring the updating portion of the current project.

 ## Date
 Thursday 2nd July 2026
 
 ## Learning Objectives
   - Partial Updates
   - Object Merging
   - Validation
   - Protecting Immutable fields
   - Designing Future Express APIs

## What did I learn today? - updating tasks
   - Learnt about strategies used to filter out items based from the conditions set:
         1. Blacklist strategy - specifies what should not be allowed and everything else goes through. caveat? we have to manually define what needs to be hidden every time a new property is added.
         2. Whitelist strategy - specifies what is allowed then automatically rejects everything else
   - Touched on the development process:
         1. What problem am i solving(gotten from the requirements).
         2. What are the business rules(what is the system trting to achieve ).
         3. What edge cases exist(scenerios that might break code).
         4. Design an algorithm for it (identify what should be returned once the code runs).
         5. Proceed to implementing.
         6. Test.
         7. Refactor.
         8. Review.
   - How to loop through object properties and what each method should return:
         1. object.keys() - returns an array of all the top level keys (['ENG', 'ITA', 'FRA']).
         2. object.values() - returns an array of all values (task info).
         3. object.entries() - returns an array of [key, value] pairs for looping or destructuring.   
## What problem does this solve in Focus Forge?
   - Allows for every file to handle only one functionality.
   - This in turn allows for scalability and maintainability.
## Which files changed?
   - Modified taskManager.js file to include updating a task
## What confused me?
   - The second parameter we called updates.
   - I am looking to dive into it adn fully understand it.
## One thing I want to explore tomorrow.
   - Hop on sprint 2

 ## Date   
 Friday 3rd July 2026

 ## Learning Objectives
   - Project Domain
   - Project Model
 ## What did I learn today? - What a project is
   - A project is a collection of related tasks working towards a single measurable outcome.
   - A model creates valid task Objects and has three responsibilities:
         1. Create Valid objects - takes in project info, outputs valid project object.
         2. Apply Defaults - the sytem decides what aspects of a created task needs to default upon creation.
         3. Protect Business Rules - model is the first place that rejects invalid data.
   - Learnt how to separate what the user is required to provide when they call a function and what the system handles in the background.      
 ## What problem does this solve in Focus Forge?
   - This answers the question of how a project can keep track of it`s individual tasks.
   - Tasks are able to identify which project they belong to using the projectId.
 ## Which files changed?
   - projectModel file was modified to handle the creation of a single project.
 ## What confused me?
   - So far,so good. The concepts in this file borrowed heavily from the taskModel file.

 ## Date
 Monday 6th July 2026

 ## Learning Objectives
 ## What did I learn today?
   - Dove into how the system will manage its projects and tasks.
 ## What problem does this solve in Focus Forge?
   - Provide single responsibilty for every file.
 ## Which files changed?
   - projectManager.js file was modified to perform adding,updating,deletion, and listing.

 ## Date
 Tuesday 7th July 2026

 ## Learning Objectives
   - Module Collaboration
 ## What did I learn today?
   - some() function:
      - Answers the question, does at least one item satisfy this condition?
      - Used whenever the phrase, "At least one", is used.
   - every() function:  
      - Asks the question, are all tasks completed? 
      - Used whenever the phrase, "All...", is used.
 ## What problem does this solve in Focus Forge?
   - It allows for the enforcement of the business rule that states, aproject can only be deleted if there are no incomplete tasks.
 ## Which Files Changed?
   - Modified the taskManager file so that it has the helper function that allows projectManager file to find the answer to what it was looking for.

 ## Date
 Wednesday 8th July 2026

 ## Learning Objectives
    - Implement deleteProject functionality.
 ## What did I learn today?
    - Guard Clauses - They allow for handling of failure immediately instead of nesting code.
 ## What problem does this solve in Focus Forge?
    - Ensures taht business rules are enforced by the system and anything other than the set conditions cannot run.
 ## Which files changed?  
    - Modified the projectManager fiel so that it communicates with the taskManager and implemented the delete function.

 ## Date
 Thursday 9th July 2026

 ## Learning Objectives
   - Archiving a project.
 ## What did I learn today?  
 ## What problem does this solve in Focus Forge?
    - Allows a project to be archived after completion.
    - Provides historical data that can be used for analysis later on as the project grows.
 ## Which files changed? 
    - projectManager file was modified to include the archiveProject functionality.

 ## Date
 Friday 10th July 2026

 ## Learning Objectives
    - Where does data live.
    - What happens when a browser closes.
    - Why we separate storage from logic.
    - How real applications restore their state.
    - Why managers should not know where data is saved.
    - How taskStorage and projectStorage fit into the architecture.
    - What serialization means.
    - Why JSON exists.
    - How real applications persist state.
 ## What did I learn today?
    - Local storage does not store js objects rather it only stores strings.
    - JSON packages js objects into a format that can be transmitted or stored.
    - Serialization -> is the process of converting js objects into a JSON string.
    - JSON.stringify() -> turn a js object into text (save).
    - JSON.parse() -> turn text back into js object (load).
    - Safe Default -> return the most useful default value whenever it makes sense.
 ## What problem does this solve in Focus Forge?
    - Storage is kept persistent. This way,we move from storing tasks in variables and storing them in localStorage.
    - localStorage in turn will handle saving tasks and loading tasks upon relaunch.
 ## Which files changed?
    - taskStorage file was modified to include a function for saving tasks and loading tasks.

 ## Date
 Saturday 11th July 2026

 ## Learning Objectives 
    - Review the weeks' content
 ## What did I learn today?
    - Reviewed the storage concept I worked on.

 ## Date
 Monday 13th July 2026

 ## Learning Objectives
    - Work on the taskController file.
    - Understand the role of controllers in a project / system.
    - Understand how rollbacks are used to keep systems robust.

 ## What did I learn today?
    - Implemented handling of tasks inside a controller.
    - Always let the module closest to the responsibility make the decision. I.e:
      - Storage decides how to save.
      - Manager decides how to manage data.
      - Renderer decides how to display data.
      - Controller decides the workflow.
      - app.js file decides the startup sequence.
      - Work flow:
   Application starts
        │
        ▼
   Load saved data
        │
        ▼
   Initialize managers
        │
        ▼
   Render UI
        │
        ▼
   User interacts
        │
        ▼
   Controllers coordinate actions
        │
        ▼
   Managers update state
        │
        ▼
   Storage persists changes
        │
        ▼
   UI updates   
 ## What problem does this solve in Focus Forge?
    - Controllers act as the intermidiary between the UI and backend processes. Handles inputs from the UI.

 ## Which files changed?
    - taskManager file changed to add a getTask() function to expose the taskList to taskController file instead if directly interacting with the state.
    - taskController file was modified to handle the adding of tasks from the UI.   

 ## Date 
 Tuesday 14th July 2026.

 ## What did I learn today?
    - Looked into the different types of API's that can be used:
       1. Internal API's - these are used between modules by exposing specific functions to other modules.
       2. External API's - these include Express,Http and REST API's.
    - Looked into Domain Driven Design and it is a methodology that uses domains and business rules to design the architecture of a project.
    - Managers return domain objects upon successful operation.
    - Controllers return operation results; true for  successfull operations, false for failed operations. 
    - Learned about questions to answer before writing code for a feature. They look for exisiting abstractions before creating new ones. They include:
        1. Who owns this responsibility?
        2. What is the API contract? - when you call a specific function,what should you expect.
        3. What happens when something fails?   
        4. Can we reuse something?  

 ## Date 
 Thursday 16th July 2026

 ## Learning Objectives
    - Implement handleCompleteTask function inside the taskController.
    - Understand how state and UI interact with each other.

 ## What did I learn today?
    - Mutate state first, render second. Rendering should happen after the state is stable.
    - In focus forge,this would like:
      1. Finish all business logic.
      2. Persist changes.
      3. Then update the UI.  
    - Controllers coordinate; managers own business logic.
    - Design for change.

 ## Date
 Friday 17th July 2026


 ## Learning Objectives
 ## What did I Learn today?
    - Implemented handleCompleteTask function
 ## What files changed?
    - taskManager file was modified to implement a function to render tasks.
    - taskController file was modified to implement the handleCompleteTask function.
