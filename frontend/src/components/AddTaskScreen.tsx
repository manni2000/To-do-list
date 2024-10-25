import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Task } from '../types/task';

type Priority = 'low' | 'medium' | 'high';

interface AddTaskScreenProps {
  onBack: () => void;
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

export default function AddTaskScreen({
  onBack,
  onSubmit,
}: AddTaskScreenProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '', // Separate date input
    startTime: '', // Separate start time input
    endTime: '', // Separate end time input
    priority: 'medium' as Priority, // Explicitly typed priority
    completed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Combine date and startTime into a single dateTime string
    const dateTime = `${formData.date}T${formData.startTime}`;

    // Create a task object that matches the expected type
    const task = {
      ...formData,
      dateTime, // Combined dateTime field
    };

    onSubmit(task); // Pass the combined task object
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-gray-600">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Add New Task</h1>
        <div className="w-6" />
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Task Title
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Task Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Set Date
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="time"
              required
              value={formData.startTime}
              onChange={(e) =>
                setFormData({ ...formData, startTime: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              required
              value={formData.endTime}
              onChange={(e) =>
                setFormData({ ...formData, endTime: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value as Priority })
            } // Use Priority type
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Add Description"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          Create task
        </button>
      </form>
    </div>
  );
}
