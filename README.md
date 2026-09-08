# Focus Forge

Focus Forge is a productivity-focused system designed to help learners and developers build discipline, organize their work, track productive activity, and measure meaningful progress.

Unlike traditional screen-time monitoring tools that focus on limiting device usage, Focus Forge is designed around rewarding **productive learning and development activity**.

Examples include:

* Programming
* Studying
* Watching tutorials
* Reading documentation
* Working on projects
* Completing meaningful tasks

> **Core principle: Reward sustained growth, not raw activity.**

---

# Project Vision

Focus Forge is being built from the inside out.

The system begins with the fundamental entities that represent a learner's work and gradually builds toward tracking, analytics, and gamification.

The long-term relationship is:

```text
Projects
   ↓
Tasks
   ↓
Work Sessions
   ↓
Productive Activity
   ↓
Progress
   ↓
Feedback
```

A **Project** represents a larger piece of work or learning objective.

A **Task** represents an actionable unit of work belonging to a project.

A **Session** represents time spent working on productive activity.

Eventually, Focus Forge should be able to answer questions such as:

> What did you accomplish, how consistently are you improving, and what should you work on next?

---

# Current Development Milestone

## V1 — CLI Application

The first complete application interface has now been implemented as a **Node.js command-line application**.

V1 establishes the complete application flow from user interaction to domain logic and persistent storage.

The CLI currently supports:

* Creating projects
* Listing projects
* Creating tasks
* Listing tasks
* Project and task persistence
* Loading persisted data when the application starts
* Action-based routing
* Interactive command-line prompts

The CLI is intentionally being treated as a learning milestone rather than the final interface for Focus Forge.

The next step is to **refactor the architecture**, identify reusable core logic, separate CLI-specific concerns, and prepare the system for the web application.

---

# Architecture

Focus Forge has been built around separation of responsibilities.

The current application flow is:

```text
User
 ↓
CLI
 ↓
Prompt
 ↓
Router
 ↓
Controller
 ↓
Manager
 ↓
Model
 ↓
Persistence
```

On application startup, persisted state is restored before the menu begins:

```text
projects.json ──→ loadProjects() ──→ setProjects() ──→ projectList
                                                            │
tasks.json ─────→ loadTasks() ──────→ setTasks() ────────→ taskList
                                                            │
                                                            ↓
                                                        Main Menu
```

This process is referred to as **hydrating the application's in-memory state**.

The JSON files provide persistence, while the managers maintain the application's current working state.

---

# Core Domains

## Projects

The Project domain currently contains:

```text
Project
 ├── Model
 ├── Manager
 ├── Controller
 └── File Storage
```

### Project Model

Responsible for defining and creating project objects.

### Project Manager

Responsible for project state and business operations.

Current functionality includes:

* Adding projects
* Listing projects
* Finding projects by ID
* Updating projects
* Deleting projects
* Archiving projects
* Maintaining the project collection

### Project Controller

Coordinates project operations between the application interface and the project domain.

### Project File Storage

Handles persistence of projects using:

```text
data/projects.json
```

---

# Tasks

The Task domain follows the same architectural pattern:

```text
Task
 ├── Model
 ├── Manager
 ├── Controller
 └── File Storage
```

### Task Model

Responsible for defining the structure and creation of task objects.

### Task Manager

Responsible for task state and business operations.

Current functionality includes:

* Adding tasks
* Listing tasks
* Finding tasks by ID
* Finding tasks by project ID
* Finding unassigned tasks
* Updating tasks
* Deleting tasks
* Marking tasks as completed
* Checking for incomplete tasks belonging to projects

### Task Controller

Coordinates task operations between the application interface and task domain.

### Task File Storage

Handles persistence of tasks using:

```text
data/tasks.json
```

---

# CLI

The CLI is designed around **actions**.

The menu does not contain the implementation of business operations. Instead, it maps user choices to the appropriate application operation.

Current flow:

```text
1 → Create Project
2 → List Projects
3 → Create Task
4 → List Tasks
5 → Exit
```

The router connects these actions to the appropriate controllers.

For example:

```text
Create Project
      ↓
promptProject()
      ↓
handleAddProject()
      ↓
createProject()
      ↓
addProject()
      ↓
saveProjects()
```

And:

```text
Create Task
      ↓
promptTask()
      ↓
handleAddTask()
      ↓
createTask()
      ↓
addTask()
      ↓
saveTasks()
```

The CLI therefore acts as an **entry point into the existing domain**, rather than becoming a second place where business logic is implemented.

---

# Persistence

V1 uses JSON files for persistence.

```text
data/
├── projects.json
└── tasks.json
```

The application uses Node's filesystem APIs to save and load data.

### Saving

```text
In-memory collection
        ↓
JSON.stringify()
        ↓
JSON file
```

### Loading

```text
JSON file
    ↓
fs.readFileSync()
    ↓
JSON.parse()
    ↓
JavaScript array
    ↓
setProjects() / setTasks()
```

Persistence is performed by **write operations**.

Read-only operations do not modify state and therefore do not need to save anything.

This distinction is intentional and will become increasingly important as Focus Forge moves toward more sophisticated persistence systems.

---

# Current Project Structure

The current V1 structure is approximately:

```text
focus-forge/
│
├── README.md
├── data/
│   ├── projects.json
│   └── tasks.json
│
└── js/
    │
    ├── app.js
    ├── router.js
    │
    ├── cli/
    │   ├── mainMenu.js
    │   ├── prompts.js
    │   ├── projectPrompt.js
    │   ├── taskPrompt.js
    │   └── exit.js
    │
    ├── projects/
    │   ├── projectModel.js
    │   ├── projectManager.js
    │   ├── projectController.js
    │   ├── projectStorage.js
    │   └── projectFileStorage.js
    │
    └── tasks/
        ├── taskModel.js
        ├── taskManager.js
        ├── taskController.js
        ├── taskStorage.js
        └── taskFileStorage.js
```

Some files such as the original browser-oriented storage modules may remain because the project is evolving from its earlier browser implementation toward the Node.js CLI.

The upcoming refactoring phase will determine which modules should remain, move, be renamed, or be replaced.

---

# Development Phases

## Phase 1 — Core Domain

### Projects

* [x] Project model
* [x] Project manager
* [x] Project controller
* [x] Project operations
* [x] Project persistence

### Tasks

* [x] Task model
* [x] Task manager
* [x] Task controller
* [x] Task operations
* [x] Task persistence

### Architecture

* [x] Modular project structure
* [x] Separation of domain responsibilities
* [x] Model layer
* [x] Manager layer
* [x] Controller layer
* [x] Storage layer
* [x] Read-only operations
* [x] Write operations
* [x] State management
* [x] Application startup hydration

---

# Phase 1B — CLI / V1

* [x] Main menu
* [x] User prompts
* [x] Project prompt
* [x] Task prompt
* [x] Action-based routing
* [x] Project creation through CLI
* [x] Project listing through CLI
* [x] Task creation through CLI
* [x] Task listing through CLI
* [x] Project persistence
* [x] Task persistence
* [x] Load persisted projects on startup
* [x] Load persisted tasks on startup
* [x] Complete CLI interaction flow

**Status: Complete**

---

# Immediate Next Phase — Refactoring

Before beginning the web version, the V1 implementation will be refactored.

The goal is **not** to rewrite working code simply for the sake of rewriting it.

The goal is to understand what was learned during V1 and use that knowledge to improve the architecture.

The refactoring phase will focus on:

* [ ] Reviewing module responsibilities
* [ ] Separating CLI-specific code from reusable application logic
* [ ] Reviewing controller responsibilities
* [ ] Reviewing manager responsibilities
* [ ] Reviewing storage responsibilities
* [ ] Improving renderers
* [ ] Reviewing the router
* [ ] Removing unnecessary duplication
* [ ] Improving naming and module organization
* [ ] Identifying reusable core application logic
* [ ] Preparing the architecture for multiple interfaces

The desired result is:

```text
                 Focus Forge Core
                       │
              ┌────────┴────────┐
              ↓                 ↓
             CLI              Web
              │                 │
              └────────┬────────┘
                       ↓
                 Shared Domain
                       │
              ┌────────┴────────┐
              ↓                 ↓
          Projects            Tasks
              │                 │
              └────────┬────────┘
                       ↓
                   Storage
```

The CLI should eventually become **one interface over the application**, rather than the application itself.

---

# Next Major Phase — Web Application

Once the refactoring is complete, development will move toward the web version.

The goal will be to reuse the domain logic developed during V1 wherever appropriate rather than rebuilding the system from scratch.

The web version will introduce:

* Web-based project management
* Web-based task management
* Dynamic rendering
* User interface components
* Browser interaction
* Eventually, a more appropriate web persistence architecture

The architecture should evolve toward:

```text
                 Web Interface
                       ↓
                  Application
                       ↓
             ┌─────────┴─────────┐
             ↓                   ↓
          Projects             Tasks
             ↓                   ↓
          Business Logic / Domain
                       ↓
                   Storage
```

The exact technologies and structure will be determined during the refactoring and web phases based on the problems that need to be solved.

---

# Future Development

## Phase 2 — Manual Tracking

The next major domain after the web foundation is productivity/session tracking.

Planned functionality:

* Start a session
* Stop a session
* Calculate session duration
* Display tracked sessions
* Associate sessions with projects
* Associate sessions with tasks
* Persist session information

This introduces the relationship between:

```text
What I planned to do
        ↓
What I actually worked on
        ↓
How long I worked
```

---

## Phase 3 — Activity Detection

Once manual tracking is stable:

* VS Code activity tracking
* Browser activity monitoring
* YouTube learning detection
* Resource-level tracking
* Automatic session detection

---

## Phase 4 — Analytics

Once meaningful activity data exists:

* Productivity charts
* Learning trends
* Daily summaries
* Weekly summaries
* Session insights
* Project progress
* Learning patterns

---

## Phase 5 — Gamification

Productivity data can then become the foundation for:

* XP
* Levels
* Achievements
* Streaks
* Goals
* Milestones
* Rewards

The core principle remains:

> **Reward sustained growth, not raw activity.**

---

## Phase 6 — Ecosystem Expansion

Potential future functionality:

* Todo integration
* Habit tracking
* AI productivity insights
* Additional learning integrations
* Cross-platform support
* Advanced analytics

---

# Technology Evolution

## Current

* JavaScript
* Node.js
* Node.js filesystem APIs
* JSON persistence
* Command-line interface

## Planned

* HTML
* CSS
* JavaScript
* React
* Express
* SQLite / PostgreSQL
* Electron
* Additional technologies as required

Technologies will be introduced when they solve an actual problem rather than being added prematurely.

---

# Key Concepts Learned

Focus Forge is being used as a practical environment for learning software engineering.

Concepts encountered so far include:

* JavaScript objects
* Arrays
* Functions
* ES Modules
* Module resolution
* State management
* Single source of truth
* Separation of concerns
* Domain modelling
* CRUD operations
* Array methods
* Predicates
* Guard clauses
* Validation
* Whitelisting
* Partial updates
* Immutable state
* Controllers
* Managers
* Models
* Persistence
* Serialization
* JSON
* Node.js filesystem APIs
* File paths
* Asynchronous JavaScript
* `async` / `await`
* CLI interaction
* Application routing
* State hydration
* Layered architecture

The goal is not simply to memorize these concepts.

The goal is to understand **why they exist, what problems they solve, and where they belong in a real system**.

---

# Development Philosophy

Focus Forge is intentionally being built incrementally.

The goal is not just to finish an application, but to:

* Learn software engineering principles
* Practice clean architecture
* Improve problem solving
* Understand domain modelling
* Learn how responsibilities are separated
* Build reusable components
* Understand how modules communicate
* Develop the ability to read and understand other people's code
* Build systems that can evolve over time

The development process follows:

```text
Understand the problem
        ↓
Identify the business rules
        ↓
Consider edge cases
        ↓
Design the solution
        ↓
Implement
        ↓
Test
        ↓
Refactor
        ↓
Review
        ↓
Continue building
```

The architecture is allowed to evolve as understanding improves.

The objective is not to design the "perfect" architecture from the beginning.

It is to **continuously improve the architecture as software engineering knowledge grows**.

---

# Current Status

**Status:** Active Development

**Current Milestone:** V1 — CLI Application

**V1 Status:** Complete

### Completed

* Projects domain
* Tasks domain
* Models
* Managers
* Controllers
* Read operations
* Write operations
* JSON persistence
* Application startup hydration
* CLI
* Interactive prompts
* Action-based routing

### Current Focus

**Refactoring V1**

The next goal is to cleanly separate reusable application/domain logic from CLI-specific concerns and establish a stronger foundation for the web application.

### Next

```text
V1 CLI
   ↓
Refactoring
   ↓
Web Application
   ↓
Manual Tracking
   ↓
Activity Detection
   ↓
Analytics
   ↓
Gamification
   ↓
Ecosystem Expansion
```

---

# Long-Term Vision

Focus Forge is intended to become more than a task manager or time tracker.

The long-term goal is to create a system that understands a learner's work, measures meaningful progress, and provides feedback that encourages consistent growth.

Instead of simply asking:

> "How much time did you spend on your computer?"

Focus Forge should eventually be able to answer:

> "What did you accomplish, how consistently are you improving, and what should you work on next?"

---

# Notes

Focus Forge is under active development.

The architecture, folder structure, technologies, and implementation strategies are expected to change as the project grows.

These changes are part of the learning process.

The objective is not to build everything at once.

The objective is to **build, understand, test, refactor, and evolve**.
