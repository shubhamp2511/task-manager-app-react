import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskInput = React.memo(() => {
  const { addTask } = useTasks();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTask(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add task..."
      />
      <button type="submit">Add</button>
    </form>
  );
});

export default TaskInput;
