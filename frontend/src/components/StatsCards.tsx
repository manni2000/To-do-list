import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface StatsCardsProps {
  completed: number;
  pending: number;
}

export default function StatsCards({ completed, pending }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-purple-100 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="h-5 w-5 text-purple-600" />
          <span className="text-purple-600 font-medium">Task Complete</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-purple-600">{completed}</span>
          <span className="ml-2 text-sm text-purple-500">This Week</span>
        </div>
      </div>
      
      <div className="bg-red-50 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <XCircle className="h-5 w-5 text-red-600" />
          <span className="text-red-600 font-medium">Task Pending</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-red-600">{pending}</span>
          <span className="ml-2 text-sm text-red-500">This Week</span>
        </div>
      </div>
    </div>
  );
}