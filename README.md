# focus-forge

A productivity-focused  project that helps gamify learning and programming time by tracking study and coding sessions.

The goal is to help people, like me, to build discipline by making progress intentional,measurable, and accountable.

## Project Vision

Instead of traditional screen-time monitoring focused on limiting usage, this project focuses on rewarding productive learning activities such as:

- Programming
- Studying
- Watching tutorials
- Reading documentation
- Working on projects

## Planned Features
- Goal tracking
- Streak systems
- XP and gamification
- Productivity analytics
- VS Code activity detection
- YouTube learning tracking
- Resource-level tracking

---

## Current Version
v0.1

### Week 1 Goals

The current version focuses on building the core tracking engine using plain JavaScript.

Current features:
-Managing Tasks(Adding,deleting,updating,searching,sorting)
- Start a session
- Stop a session
- Calculate session duration
- Display tracked sessions
- Store session data temporarily in memory

---

## Learning Goals

This project is also being used to improve understanding of:

- JavaScript objects
- Arrays
- Modules
- DOM manipulation
- Event handling
- State management
- Software architecture
- SOLID principles

---

## Tech Stack

Current:
- HTML
- CSS
- JavaScript

Planned:
- Node.js
- Express
- SQLite/PostgreSQL
- Electron
- React

---

## Project Structure

```plaintext
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
│
│   ├── app.js
│
│   ├── tasks/
│   │
│   │   ├── taskModel.js
│   │   ├── taskManager.js
│   │   ├── taskStorage.js
│   │   └── taskController.js
│   │
│   ├── tracking/
│   │
│   │   ├── timer.js
│   │   ├── tracker.js
│   │   └── session.js
│   │
│   ├── ui/
│   │
│   │   ├── dashboard.js
│   │   ├── taskRenderer.js
│   │   ├── modal.js
│   │   └── notifications.js
│   │
│   └── utils/
│
│       ├── helpers.js
│       ├── validators.js
│       └── time.js
│
└── docs/
```

---

## Development Philosophy

This project is intentionally being built incrementally.

The goal is not just to finish an app, but to:
- learn software engineering principles,
- practice clean architecture,
- improve problem solving,
- and build scalable systems over time.

Each phase of the project introduces new concepts gradually.

---

## Planned Phases

### Phase 1 — Manual Tracking
- Manual session tracking
- Goal setting
- Daily summaries

### Phase 2 — Activity Detection
- VS Code tracking
- Browser activity monitoring
- YouTube learning detection

### Phase 3 — Analytics
- Productivity charts
- Learning trends
- Session insights

### Phase 4 — Gamification
- XP system
- Levels
- Achievements
- Streaks

### Phase 5 — Ecosystem Expansion
- Todo integration
- Habit tracking
- AI productivity insights

---

## Key Architectural Goals

The project aims to follow:
- Separation of concerns
- Modular design
- Reusability
- SOLID principles

Each system should have a single responsibility and remain easy to extend over time.

---

## Current Focus

Right now the main focus is:
- building consistency,
- improving JavaScript fundamentals,
- and learning through practical implementation.

---

## Notes

This project is under active development and will continue evolving as new JavaScript and backend concepts are learned.
