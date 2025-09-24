import React, { useMemo, useCallback } from 'react';
import { useTasks } from '../context/TaskContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = React.memo(({ filter }) => {
  const { tasks, toggleTask, deleteTask, setTasks } = useTasks();

  const filteredTasks = useMemo(() => {
    if (filter === 'completed') return tasks.filter(t => t.completed);
    if (filter === 'pending') return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    const reordered = Array.from(tasks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTasks(reordered);
  }, [tasks, setTasks]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="task-list">
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`task ${task.completed ? 'completed' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default TaskList;
