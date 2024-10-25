import { ArrowLeft, Search } from 'lucide-react';
import { Task } from '../types/task';

interface SearchScreenProps {
  query: string;
  tasks: Task[];
  onBack: () => void;
  onToggleComplete: (id: string) => void;
}

export default function SearchScreen({ query, tasks, onBack, onToggleComplete }: SearchScreenProps) {
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="mb-6">
        <div className="flex items-center space-x-3">
          <button onClick={onBack} className="text-gray-600">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="relative flex-1">
            <input
              type="text"
              defaultValue={query}
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </header>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className="flex items-center space-x-3 bg-white p-4 rounded-lg"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task._id)}
              className="h-5 w-5 rounded border-gray-300 text-blue-600"
            />
            <span className={task.completed ? 'text-gray-400 line-through' : ''}>
              {task.title}
            </span>
          </div>
        ))}
        
        {filteredTasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No tasks found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
}