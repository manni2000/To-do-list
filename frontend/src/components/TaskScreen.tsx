import React, { useState } from 'react';
import { Search, Settings, Bell, Plus } from 'lucide-react';
import WeekDays from './WeekDays';
import StatsCards from './StatsCards';
import TasksList from './TasksList';
import { Task } from '../types/task';
import { TaskForm } from './TaskForm';

interface TaskScreenProps {
  tasks: Task[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  stats: { completed: number; pending: number };
  onAddTask: () => void;
  onSearch: (query: string) => void;
  onToggleComplete: (id: string) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
  getTasksByDate: (date: Date) => Task[];
}

export default function TaskScreen({
  tasks,
  selectedDate,
  setSelectedDate,
  stats,
  onAddTask,
  onSearch,
  onToggleComplete,
  onUpdateTask,
  onDeleteTask,
  getTasksByDate,
}: TaskScreenProps) {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const todaysTasks = getTasksByDate(selectedDate);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search for a task"
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex space-x-3 ml-4">
            <button className="p-2 text-gray-600">
              <Settings className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600">
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <WeekDays selectedDate={selectedDate} onDateSelect={setSelectedDate} />
      </header>

      <StatsCards completed={stats.completed} pending={stats.pending} />

      <div className="mb-6">
        <div className="bg-white rounded-lg p-4">
          <div className="h-2 bg-gray-100 rounded-full">
            <div 
              className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              style={{ width: `${(stats.completed / (stats.completed + stats.pending)) * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Weekly Progress</p>
        </div>
      </div>

      <TasksList
        tasks={todaysTasks}
        onToggleComplete={onToggleComplete}
        onEdit={setEditingTask}
        onDelete={onDeleteTask}
      />

      <button
        onClick={onAddTask}
        className="fixed right-6 bottom-6 w-14 h-14 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
      >
        <Plus className="h-6 w-6" />
      </button>

      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={(updates) => {
            onUpdateTask(editingTask.id, updates);
            setEditingTask(null);
          }}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}