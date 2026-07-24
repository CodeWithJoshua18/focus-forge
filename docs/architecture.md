# Business Rules
## A Business rule exists because of what the apllication is trying to achieve,not because of technical limitations

## Project Management

1. A project cannot be deleted if it contains one or more incomplete tasks.
2. A project must have a unique ID.
3. A task can be deleted if it is deemed unnecessary by the user.
4. A project is considered complete only when all its tasks are completed.
5. A project starts as active.
6. A completed project records completedAt.
7. Project progress is calculated,never stored.
8. Completed projects should be archived by default rather than permanently deleted.
9. Permanent deletion should be a deliberate user action and only be available for archived projects.
10. Completed tasks become read-only to preserve historical accuracy and ensure accountability metrics remain trustworthy.
11. A newly created project must receive its first task before it becomes an active working project.

## Project-Task Relationship
   - Every task belongs to exactly one project through projectId.
   - A project does not store a list of its tasks.
   - Whenever a project's tasks are needed, the system retrieves all tasks whose projectId matches the project's id.
   - Project statistics such as task count, completed tasks, and progress are calculated, not stored.

 ## Version 1 Architecture design
    - Any controller that changes application state is responsible for refreshing the affected UI.   