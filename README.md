# Focus Forge

Focus Forge is a productivity-focused system designed to address the challenge of maintaining discipline and accountability in study and programming. Learners and developers often struggle with distractions and unstructured progress, making it difficult to stay consistent and measure achievements.

Existing tools such as Jira, Trello, and Asana provide powerful project management capabilities, but they are often complex, team-oriented, and not tailored to the needs of individual learners who simply want a lightweight way to organize personal projects and tasks.

## Project Vision

Instead of traditional screen-time monitoring focused on limiting usage, this project focuses on rewarding productive learning activities such as:

* Programming
* Studying
* Watching tutorials
* Reading documentation
* Working on projects

Focus Forge aims to reward sustained growth, not raw activity.

The vision is to provide a lightweight, learner-friendly platform that helps users build discipline, measure their progress, and stay accountable — making productivity both structured and motivating.

---

# Project Domain

Focus Forge is being designed around the domain of **personal learning and productivity management**.

The system is not intended to be just another generic task manager. Its domain revolves around the relationship between:

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
```

A **Project** represents a larger piece of work or learning objective.

A **Task** represents an actionable unit of work belonging to that project.

A **Session** represents time spent working on productive activity.

Eventually, Focus Forge will use this information to understand progress and provide meaningful productivity feedback.

The project domain is therefore being developed from the inside out: first establishing the core entities and their responsibilities, then building tracking, analytics, and gamification on top of them.

---

# Planned Features

* Goal tracking
* Streak systems
* XP and gamification
* Productivity analytics
* VS Code activity detection
* YouTube learning tracking
* Resource-level tracking

---

# Current Version

**v0.1 — Core Domain & Application Architecture**

Focus Forge has moved beyond the initial experimentation stage.

The current development focus is establishing the core domain and learning how to structure an application around clearly separated responsibilities.

Two core domains have currently been implemented:

* **Tasks**
* **Projects**

Both domains follow the same architectural pattern:

```text
Model
  ↓
Manager
  ↓
Storage
  ↓
Controller
```

This architecture provides a foundation that can later be extended to tracking, goals, analytics, and other Focus Forge features.

---

# What Has Been Completed

## Task Domain

The Task domain has been implemented with its core architectural layers.

### Task Model

Responsible for representing the structure and data of a task.

### Task Manager

Responsible for task-related business operations.

Current task functionality includes:

* Adding tasks
* Updating tasks
* Deleting tasks
* Searching tasks
* Sorting tasks
* Managing task state

### Task Storage

Responsible for managing task data persistence within the current application environment.

### Task Controller

Responsible for coordinating task operations between the application and the task domain.

The Task domain therefore follows:

```text
Task Controller
      ↓
Task Manager
      ↓
Task Model
      ↕
Task Storage
```

---

## Project Domain

The Project domain has also been implemented using the same architectural approach.

### Project Model

Responsible for representing the structure and data of a project.

### Project Manager

Responsible for project-related business operations.

### Project Storage

Responsible for managing project data persistence.

### Project Controller

Responsible for coordinating project operations between the application and the project domain.

The Project domain follows:

```text
Project Controller
        ↓
Project Manager
        ↓
Project Model
        ↕
Project Storage
```

The completion of both domains is an important milestone because Focus Forge now has a foundation for modelling the relationship between larger projects and the tasks that make up those projects.

---

# Current Architecture

The architecture is gradually moving toward a layered and modular application.

At the domain level:

```text
                    Focus Forge
                        │
              ┌─────────┴─────────┐
              │                   │
           Projects             Tasks
              │                   │
       ┌──────┴──────┐     ┌──────┴──────┐
       │             │     │             │
     Model        Manager  Model       Manager
       │             │     │             │
     Storage     Controller Storage   Controller
```

The purpose of this structure is to keep responsibilities separated.

For example, the controller should not contain all of the business logic, while the manager should not be responsible for how data is displayed.

This separation is allowing the project to move from simply writing JavaScript that works toward understanding **how software should be organized**.

---

# Current Development: CLI

With the core domain layers established, development is now moving toward the application's **CLI interaction layer**.

The CLI is being designed around **actions**.

The menu's responsibility is to present actions that the user can perform rather than containing the implementation of those actions.

Conceptually:

```text
User
 ↓
Main Menu
 ↓
Action
 ↓
Controller
 ↓
Manager
 ↓
Model / Storage
```

This means the CLI becomes an entry point into the existing domain rather than becoming another place where business logic is duplicated.

The current CLI work is therefore focused on understanding:

* Application flow
* Action-based design
* Controllers
* Rendering
* User interaction
* How the UI/CLI communicates with domain logic

---

# Current Learning Focus

Focus Forge is being used as a practical environment for learning software engineering.

The current learning areas include:

* JavaScript objects
* Arrays
* Modules
* Functions
* State management
* Controllers
* Managers
* Models
* Storage
* Rendering
* Separation of concerns
* SOLID principles
* Domain modelling
* Application architecture
* Designing systems that can evolve

The goal is not simply to make each feature work.

The goal is to understand **why each responsibility belongs where it does**.

---

# Current Project Structure

```text
focus-forge/
│
├── README.md
├── index.html
├── .gitignore
│
├── assets/
│
├── css/
│   ├── styles.css
│   ├── layout.css
│   └── components.css
│
├── js/
│   │
│   ├── app.js
│   │
│   ├── cli/
│   │   └── mainMenu.js
│   │
│   ├── tasks/
│   │   ├── taskModel.js
│   │   ├── taskManager.js
│   │   ├── taskStorage.js
│   │   └── taskController.js
│   │
│   ├── projects/
│   │   ├── projectModel.js
│   │   ├── projectManager.js
│   │   ├── projectStorage.js
│   │   └── projectController.js
│   │
│   ├── tracking/
│   │   ├── timer.js
│   │   ├── tracker.js
│   │   └── session.js
│   │
│   ├── ui/
│   │   ├── dashboard.js
│   │   ├── taskRenderer.js
│   │   ├── modal.js
│   │   └── notifications.js
│   │
│   └── utils/
│       ├── helpers.js
│       ├── validators.js
│       └── time.js
│
└── docs/
```

The `tasks/` and `projects/` directories currently represent implemented domain modules.

The `tracking/`, `ui/`, and other directories contain planned or partially developed functionality and should not be treated as completed simply because the directories exist.

---

# Development Philosophy

This project is intentionally being built incrementally.

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

Each phase introduces new concepts gradually.

The architecture is allowed to evolve as understanding improves.

---

# Planned Development Phases

## Phase 1 — Core Domain

### Projects

* [x] Project model
* [x] Project manager
* [x] Project storage
* [x] Project controller

### Tasks

* [x] Task model
* [x] Task manager
* [x] Task storage
* [x] Task controller
* [x] Add tasks
* [x] Update tasks
* [x] Delete tasks
* [x] Search tasks
* [x] Sort tasks

### Application Architecture

* [x] Modular project structure
* [x] Separate domain responsibilities
* [x] Establish Model layer
* [x] Establish Manager layer
* [x] Establish Storage layer
* [x] Establish Controller layer
* [x] Begin CLI architecture
* [x] Define action-based menu approach
* [ ] Complete CLI interaction flow

---

## Phase 2 — Manual Tracking

The next major domain to build is productivity/session tracking.

Planned functionality:

* Start a session
* Stop a session
* Calculate session duration
* Display tracked sessions
* Store session data temporarily in memory
* Associate sessions with projects/tasks

This will allow Focus Forge to begin connecting **what the user planned to do** with **what the user actually spent time doing**.

---

## Phase 3 — Activity Detection

Once the manual tracking foundation is stable:

* VS Code activity tracking
* Browser activity monitoring
* YouTube learning detection
* Resource-level tracking
* Automatic session detection

---

## Phase 4 — Analytics

Once Focus Forge has meaningful activity data:

* Productivity charts
* Learning trends
* Daily summaries
* Weekly summaries
* Session insights
* Project progress
* Learning patterns

---

## Phase 5 — Gamification

The productivity data can then become the foundation for:

* XP
* Levels
* Achievements
* Streaks
* Goals
* Milestones
* Rewards

The core principle remains:

> Reward sustained growth, not raw activity.

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

# Planned Technology Evolution

### Current

* HTML
* CSS
* JavaScript

### Planned

* Node.js
* Express
* SQLite / PostgreSQL
* Electron
* React

These technologies will be introduced when the problems they solve become relevant rather than being added prematurely.

---

# Key Architectural Goals

Focus Forge aims to follow:

* Separation of concerns
* Single Responsibility Principle
* SOLID principles
* Modular design
* Reusability
* Clear application flow
* Maintainability
* Extensibility
* Domain-driven thinking

The architecture should allow individual parts of the system to change without requiring the entire application to be rewritten.

---

# What Comes Next

The immediate priority is to continue building the application around the domain that has already been established.

The current progression is:

```text
                    FOCUS FORGE
                         │
             ┌───────────┴───────────┐
             │                       │
          PROJECTS                 TASKS
             │                       │
      Model / Manager         Model / Manager
      Storage / Controller   Storage / Controller
             │                       │
             └───────────┬───────────┘
                         │
                    CLI / Actions
                         │
                    APPLICATION
                         │
                  Tracking System
                         │
                    Analytics
                         │
                   Gamification
```

The immediate development goal is to complete the CLI interaction layer on top of the existing domain architecture.

After that, the focus can move toward connecting the **Project → Task → Session** relationship.

---

# Long-Term Vision

Focus Forge is intended to become more than a task manager or time tracker.

The long-term goal is to create a system that understands a learner's work, measures meaningful progress, and provides feedback that encourages consistent growth.

Instead of simply asking:

> "How much time did you spend on your computer?"

Focus Forge should eventually be able to answer:

> "What did you accomplish, how consistently are you improving, and what should you work on next?"

---

# Project Status

**Status:** Active Development

**Current Version:** v0.1

**Current Stage:** Core domain architecture and CLI development

**Completed Domains:**

* Projects
* Tasks

**Completed Architectural Layers:**

* Models
* Managers
* Storage
* Controllers

**Current Focus:**

* CLI
* Action-based application flow
* Rendering
* Connecting the application interface to the existing domain architecture

**Next Major Milestone:**

Complete the CLI flow and begin connecting Projects, Tasks, and productivity sessions into a coherent application workflow.

---

# Notes

This project is under active development and will continue evolving as new JavaScript and software engineering concepts are learned.

The architecture, folder structure, and technology stack are expected to change as the project grows.

These changes are part of the learning process.

The objective is not to design the "perfect" architecture from the beginning, but to continuously improve the architecture as the understanding of software engineering grows.

