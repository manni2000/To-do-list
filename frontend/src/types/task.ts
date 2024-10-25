export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  dateTime: string;
  priority?: Priority;
  completed: boolean;
  createdAt: string;
}

export interface WeekSummary {
  startDate: string;
  endDate: string;
  openTasks: number;
  completedTasks: number;
  tasks: Task[];
}