## React Task Manager App ##
A modern and feature-rich Task Manager application built with React. Manage daily tasks efficiently with persistent storage, drag-and-drop reordering, dark/light mode, form validation, and responsive UI.

## Features ##
Add, Complete, Delete Tasks: Quickly create and manage your task list.
Filter Tasks: View all, completed, or pending tasks.
Persistent Storage: Tasks are saved to browser Local Storage.
Form Validation: Prevent empty tasks from being added.
Global State Management: Uses React Context API.
Drag-and-Drop: Reorder tasks with react-beautiful-dnd.
Theming: Toggle between dark and light modes, preference is saved.
Animations: Smooth transitions when adding or removing tasks.
Responsive Design: Mobile-first, works across devices.
Performance Optimized: Uses React.memo, useCallback, and useMemo.

## Technologies Used ##
React (with hooks)
React Context API
React Beautiful DnD
Custom Hooks
CSS (modules/vanilla)
Local Storage

## Getting Started ##
   ### Prerequisites ###
      Node.js (v16+ recommended)
      npm (v8+ recommended)
   ### Installation ###
     git clone https://github.com/your-username/task-manager-app.git
     cd task-manager-app
     npm install
   ### Running the App ###
     npm start
     Open http://localhost:3000 to view in your browser.

## Folder Structure ##
task-manager-app/
├── public/
│   └── index.html
├── src/
│   ├── components/         # All React component files
│   ├── context/            # React Context files
│   ├── hooks/              # Custom hook(s)
│   ├── styles/             # CSS files
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

## Usage ##
Enter a task in the input field and click "Add".
Toggle completion by clicking the checkbox.
Delete a task with the delete button.
Filter your view using the filter buttons.
Change theme using the mode toggle.
Drag tasks to reorder them.




