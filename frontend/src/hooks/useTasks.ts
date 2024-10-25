import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Task } from '../types/task';

const API_URL = 'http://localhost:5000/api';

export function useTasks() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks
  const fetchTasks = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = useCallback(async (task: Omit<Task, '_id' | 'createdAt'>) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      setTasks(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }, []);

  const updateTask = useCallback(async (id: string, updates: Partial<Task>) => {
    try {
      const response = await axios.patch(`${API_URL}/tasks/${id}`, updates);
      setTasks(prev => prev.map(task => 
        task._id === id ? response.data : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      setTasks(prev => prev.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }, []);

  const toggleComplete = useCallback(async (id: string) => {
    try {
      const task = tasks.find(t => t._id === id);
      if (task) {
        const response = await axios.patch(`${API_URL}/tasks/${id}`, {
          completed: !task.completed
        });
        setTasks(prev => prev.map(t =>
          t._id === id ? response.data : t
        ));
      }
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  }, [tasks]);

  const getTasksByDate = useCallback((date: Date) => {
    return tasks.filter(task => {
      const taskDate = new Date(task.dateTime);
      return taskDate.toDateString() === date.toDateString();
    });
  }, [tasks]);

  const stats = {
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length,
  };

  return {
    tasks,
    selectedDate,
    setSelectedDate,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTasksByDate,
    stats,
    loading,
  };
}