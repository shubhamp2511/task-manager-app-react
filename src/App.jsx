import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="app">
          <h1>Task Manager</h1>
          <ThemeToggle />
          <TaskInput />
          <FilterButtons filter={filter} setFilter={setFilter} />
          <TaskList filter={filter} />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
