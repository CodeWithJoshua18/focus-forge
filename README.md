Focus Forge

A productivity-focused system designed to help learners and developers build discipline, organize their work, track productive activity, and measure meaningful progress.

Unlike traditional screen-time monitoring tools that focus on limiting device usage, Focus Forge is designed around rewarding productive learning and development activity.

Examples include:

Programming
Studying
Watching tutorials
Reading documentation
Working on projects
Completing meaningful tasks

Core Principle

Reward sustained growth, not raw activity.

Table of Contents
#project-vision
#current-development-milestone
#running-focus-forge-locally
#architecture
#core-domains
#projects
#tasks
#cli
#persistence
#current-project-structure
#development-phases
#future-development
#technology-evolution
#key-concepts-learned
#development-philosophy
#current-status
#long-term-vision
Project Vision

Focus Forge is being built from the inside out.

The system begins with the fundamental entities that represent a learner's work and gradually evolves toward tracking, analytics, and gamification.

Plain Text
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
Core Entities
Project

Represents a larger piece of work or learning objective.

Task

Represents an actionable unit of work belonging to a project.

Session

Represents time spent performing productive work.

Long-Term Goal

Focus Forge should eventually be able to answer questions such as:

What did you accomplish?
How consistently are you improving?
What should you work on next?
Current Development Milestone
V1 - CLI Application

The first complete application interface has been implemented as a Node.js command-line application.

V1 establishes the complete application flow from user interaction to domain logic and persistent storage.

Current Capabilities
Create projects
List projects
Create tasks
List tasks
Persist project data
Persist task data
Restore persisted state at startup
Route user actions
Handle interactive CLI prompts

The CLI is intentionally treated as a learning milestone rather than the final interface for Focus Forge.

Running Focus Forge Locally
1. Prerequisites

Install:

Node.js (LTS recommended)
npm (included with Node.js)

Verify the installation:

Shell
node --version
npm --version

If either command is not recognized, install Node.js from:

Plain Text
https://nodejs.org

and reopen your terminal.

2. Clone the Repository
Shell
git clone https://github.com/your-username/focus-forge.git

Move into the project directory:

Shell
cd focus-forge
3. Install Dependencies
Shell
npm install

This command reads the package.json file and installs all required dependencies.

4. Start the Application

If app.js is located in the project root:

Shell
node app.js

If the application entry point is located in js/app.js:

Shell
node js/app.js
Expected Menu
Plain Text
1. Create Project
2. List Projects
3. Create Task
4. List Tasks
5. Exit
5. Data Storage

Project data is stored in:

Plain Text
data/
├── projects.json
└── tasks.json

Ensure the data directory remains available so persistence can function correctly.

Architecture

Focus Forge follows a layered architecture with clearly separated responsibilities.

Current Flow
Plain Text
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
Startup Hydration Flow
Plain Text
projects.json
↓
loadProjects()
↓
setProjects()
↓
projectList
 
tasks.json
↓
loadTasks()
↓
setTasks()
↓
taskList
 
↓
Main Menu

The restoration of persisted state into memory before the application starts is referred to as state hydration.

Core Domains
Projects
Plain Text
Project
├── Model
├── Manager
├── Controller
└── Storage
Project Model

Defines and creates project objects.

Project Manager

Handles project state and business operations.

Current functionality:

Add projects
List projects
Find projects by ID
Update projects
Delete projects
Archive projects
Maintain project state
Project Controller

Coordinates project operations between the application interface and the project domain.

Project Storage

Handles persistence using:

Plain Text
data/projects.json
Tasks
Plain Text
Task
├── Model
├── Manager
├── Controller
└── Storage
Task Manager Responsibilities
Add tasks
List tasks
Find tasks by ID
Find tasks by project ID
Find unassigned tasks
Update tasks
Delete tasks
Complete tasks
Check project-task relationships
Task Storage
Plain Text
data/tasks.json
CLI

The CLI is action-driven.

The menu does not contain business logic. Instead, actions are routed to controllers.

Create Project Flow
Plain Text
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
Create Task Flow
Plain Text
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
Persistence

Focus Forge currently uses JSON file persistence.

Storage Structure
Plain Text
data/
├── projects.json
└── tasks.json
Saving
Plain Text
In-Memory State
↓
JSON.stringify()
↓
JSON File
Loading
Plain Text
JSON File
↓
fs.readFileSync()
↓
JSON.parse()
↓
JavaScript Array
↓
setProjects() / setTasks()

Read-only operations do not trigger persistence.

Write operations do.

Current Project Structure
Plain Text
focus-forge/
│
├── README.md
│
├── data/
│ ├── projects.json
│ └── tasks.json
│
└── js/
│
├── app.js
├── router.js
│
├── cli/
│ ├── mainMenu.js
│ ├── prompts.js
│ ├── projectPrompt.js
│ ├── taskPrompt.js
│ └── exit.js
│
├── projects/
│ ├── projectModel.js
│ ├── projectManager.js
│ ├── projectController.js
│ ├── projectStorage.js
│ └── projectFileStorage.js
│
└── tasks/
├── taskModel.js
├── taskManager.js
├── taskController.js
├── taskStorage.js
└── taskFileStorage.js
Development Phases
Phase 1 - Core Domain
Projects
 Models
 Managers
 Controllers
 CRUD Operations
 Persistence
Tasks
 Models
 Managers
 Controllers
 CRUD Operations
 Persistence
Architecture
 Modular structure
 Separation of concerns
 State management
 Startup hydration
Phase 1B - CLI (Complete)
 Main menu
 User prompts
 Action routing
 Project creation
 Task creation
 Persistence
 Startup loading

Status: ✅ Complete

Immediate Next Phase - Refactoring

Goals:

 Review module responsibilities
 Separate CLI concerns from core logic
 Simplify controller responsibilities
 Simplify manager responsibilities
 Improve renderers
 Improve routing
 Remove duplication
 Improve naming consistency
 Prepare for multiple interfaces
Target Architecture
Plain Text
Focus Forge Core
│
┌──────────────┴──────────────┐
│ │
▼ ▼
CLI Web
│ │
└──────────────┬──────────────┘
▼
Shared Domain
│
┌───────────────┴───────────────┐
▼ ▼
Projects Tasks
│ │
└───────────────┬───────────────┘
▼
Storage
Next Major Phase - Web Application

Planned features:

Web project management
Web task management
Dynamic rendering
Reusable UI components
Browser-based interaction
Improved persistence strategy
Future Development
Phase 2 - Manual Tracking

Planned functionality:

Start sessions
Stop sessions
Calculate duration
Associate sessions with projects
Associate sessions with tasks
Persist session data
Plain Text
Planned Work
↓
Actual Work
↓
Time Spent
Phase 3 - Activity Detection
VS Code activity tracking
Browser monitoring
YouTube learning detection
Automatic session detection
Phase 4 - Analytics
Productivity charts
Learning trends
Daily summaries
Weekly summaries
Progress insights
Phase 5 - Gamification
XP
Levels
Achievements
Streaks
Goals
Milestones

Core Principle:

Reward sustained growth, not raw activity.

Phase 6 - Ecosystem Expansion

Potential future functionality:

Habit tracking
AI productivity insights
Learning integrations
Cross-platform support
Advanced analytics
Technology Evolution
Current Stack
JavaScript
Node.js
Filesystem API
JSON Persistence
CLI
Planned Stack
HTML
CSS
JavaScript
React
Express
SQLite / PostgreSQL
Electron

Technologies are introduced when they solve a problem, not before.

Key Concepts Learned

Focus Forge serves as a practical software engineering learning environment.

Key concepts explored:

JavaScript Objects
Arrays
Functions
ES Modules
State Management
Domain Modelling
CRUD Operations
Validation
Guard Clauses
Partial Updates
Serialization
JSON
Persistence
Routing
Controllers
Managers
Models
Hydration
Separation of Concerns
Layered Architecture
Development Philosophy

Focus Forge is intentionally being built incrementally.

Plain Text
Understand the Problem
↓
Identify Business Rules
↓
Consider Edge Cases
↓
Design
↓
Implement
↓
Test
↓
Refactor
↓
Review
↓
Continue Building

The goal is not to create a perfect architecture from the beginning.

The goal is to continuously improve the architecture as understanding grows.

Current Status

Status: Active Development

Milestone: V1 CLI Application

Completed
Projects Domain
Tasks Domain
Models
Managers
Controllers
JSON Persistence
Startup Hydration
CLI Interface
Routing
Current Focus

✅ Refactoring V1

Roadmap
Plain Text
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
Long-Term Vision

Focus Forge is intended to become more than a task manager or time tracker.

Instead of asking:

"How much time did you spend on your computer?"

Focus Forge should ultimately answer:

"What did you accomplish, how consistently are you improving, and what should you work on next?"

Notes

Focus Forge is under active development.

The architecture, technologies, folder structure, and implementation strategies will continue evolving as understanding grows.

The objective is not to build everything at once.

Build → Understand → Test → Refactor → Evolve
