
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Task } from '../types/task';

interface TasksListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TasksList({
  tasks,
  onToggleComplete,
  onEdit,
  onDelete,
}: TasksListProps) {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Tasks Today</h2>
        <button className="text-blue-600 text-sm">View All</button>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600"
              />
              <span className={task.completed ? 'text-gray-400 line-through' : ''}>
                {task.title}
              </span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => onEdit(task)}
                className="text-gray-400 hover:text-blue-600"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button 
                onClick={() => onDelete(task.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}