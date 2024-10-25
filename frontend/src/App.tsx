import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TaskScreen from './components/TaskScreen';
import AddTaskScreen from './components/AddTaskScreen';
import SearchScreen from './components/SearchScreen';
import { useTasks } from './hooks/useTasks';
import { Task } from './types/task';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'tasks' | 'add' | 'search'>('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const {
    tasks,
    selectedDate,
    setSelectedDate,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTasksByDate,
    stats,
  } = useTasks();

  const handleAddTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    addTask(task);
    setCurrentScreen('tasks');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onGetStarted={() => setCurrentScreen('tasks')} />;
      case 'tasks':
        return (
          <TaskScreen 
            tasks={tasks}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            stats={stats}
            onAddTask={() => setCurrentScreen('add')}
            onSearch={(query: string) => {
              setSearchQuery(query);
              setCurrentScreen('search');
            }}
            onToggleComplete={toggleComplete}
            onUpdateTask={updateTask}
            onDeleteTask={deleteTask}
            getTasksByDate={getTasksByDate}
          />
        );
      case 'add':
        return (
          <AddTaskScreen 
            onBack={() => setCurrentScreen('tasks')}
            onSubmit={handleAddTask}
          />
        );
      case 'search':
        return (
          <SearchScreen 
            query={searchQuery}
            tasks={tasks}
            onBack={() => setCurrentScreen('tasks')}
            onToggleComplete={toggleComplete}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
    </div>
  );
}

export default App;