# Business Rules
## A Business rule exists because of what the apllication is trying to achieve,not because of technical limitations

## Project Management

1. A project cannot be deleted if it contains one or more incomplete tasks.
2. A task can be deleted if it is deemed unnecessary by the user.
3. A project is considered complete only when all its tasks are completed.
4. Completed projects should be archived by default rather than permanently deleted.
5. Permanent deletion should be a deliberate user action and only be available for archived projects.
6. Completed tasks become read-only to preserve historical accuracy and ensure accountability metrics remain trustworthy.

## Project-Task Relationship
   - Every task belongs to exactly one project through projectId.
   - A project does not store a list of its tasks.
   - Whenever a project's tasks are needed, the system retrieves all tasks whose projectId matches the project's id.
   - Project statistics such as task count, completed tasks, and progress are calculated, not stored.