import React from 'react';
import { ChevronRight } from 'lucide-react';
import { WeekSummary } from '../types/task';
import { formatDate } from '../utils/dateUtils';

interface WeekCardProps {
  weekSummary: WeekSummary;
  onClick: () => void;
}

export function WeekCard({ weekSummary, onClick }: WeekCardProps) {
  const progress = weekSummary.completedTasks / (weekSummary.openTasks + weekSummary.completedTasks) * 100 || 0;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 mb-4 cursor-pointer transition-all hover:shadow-lg"
    >
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {formatDate(weekSummary.startDate, 'short')} - {formatDate(weekSummary.endDate, 'short')}
          </h3>
          <div className="flex space-x-4 mt-1">
            <span className="text-sm text-green-600">{weekSummary.completedTasks} Completed</span>
            <span className="text-sm text-orange-600">{weekSummary.openTasks} Open</span>
          </div>
        </div>
        <ChevronRight className="h-6 w-6 text-gray-400" />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}