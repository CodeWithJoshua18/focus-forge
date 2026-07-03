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
