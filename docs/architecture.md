# Business Rules
## A Business rule exists because of what the apllication is trying to achieve,not because of technical limitations

## Project Management
1. A project cannot be deleted if it contains one or more incomplete tasks.
2. A project must have a unique ID.
3. Only tasks that are not required for historical records may be permernently.
4. A project is considered complete only when all its tasks are completed.
5. A project starts as active.
6. A completed project records completedAt.
7. Project progress is calculated,never stored.
8. Completed projects should be archived by default rather than permanently deleted.
9. Permanent deletion should be a deliberate user action and only be available for archived projects.
10. Completed tasks become read-only to preserve historical accuracy and ensure accountability metrics remain trustworthy.
11. A newly created project remains in a draft state until its first task is added.

## Project-Task Relationship
   - Every task belongs to exactly one project through projectId.
   - A project does not store a list of its tasks.
   - Whenever a project's tasks are needed, the system retrieves all tasks whose projectId matches the project's id.
   - Project statistics such as task count, completed tasks, and progress are calculated, not stored.

 ## Architecture design principles
   1. Every domain owns:
      - Model -> defines what a valid domain object looks like and guarantees that every object created by the application starts in a valid state.
      - manager -> maintains collections and enforces business rules.
      - storage -> persists and retrieves application state.
      - controller - coordinates user actions between the view, manager, and storage.
      - view -> collects user interactionss and presents the current state.
   2. Managers maintain state.
   3. Storage persists state.
   4. Controllers orchestrate.
   5. Views collect user interaction and present state.
   6. Comments describe responsibilty, not implementation.
   7. Pass data downward instead of allowing lower layers to fetch it.
   8. Prefer small functions with a single responsibility.
   9. Delay side effects until the last possible moment.  
   10. Hide implementation, expose capabilities.
   11. Separate computation from side effects.  

 ## Dependancy flow architecture
        Presentation
          (View)

            ↓

        Controller
       (Application)

            ↓

         Business
      (Manager + Model)

            ↓

          Data
        (Storage) 

 ## Business Rule Ownership
    - Business rules that depend on the state or relationships of multiple domain objects belong in the Manager.
    - The Model validates individual objects.
    - The Manager validates operations on collections.   

 ## Validation Responsibility
    - The model validates object integrity.
    - The manager validates business operations.          