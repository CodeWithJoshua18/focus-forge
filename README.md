# focus-forge

A productivity-focused JavaScript project that helps gamify learning and programming time by tracking study and coding sessions.

The goal of this project is to evolve from a simple manual session tracker into a full productivity and analytics platform for developers, students, and self-learners.

## Project Vision

Instead of traditional screen-time monitoring focused on limiting usage, this project focuses on rewarding productive learning activities such as:

- Programming
- Studying
- Watching tutorials
- Reading documentation
- Working on projects

Future versions will include:
- Goal tracking
- Streak systems
- XP and gamification
- Productivity analytics
- VS Code activity detection
- YouTube learning tracking
- Resource-level tracking

---

## Current Version

### Week 1 Goals

The current version focuses on building the core tracking engine using plain JavaScript.

Current features:
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
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   │
│   ├── tracking/
│   │   ├── session.js
│   │   ├── tracker.js
│   │   └── timer.js
│   │
│   ├── ui/
│   │   └── dashboard.js
│   │
│   └── utils/
│       └── time.js
│
└── assets/
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
