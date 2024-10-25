import React from 'react';
import { getWeekDates } from '../utlis/dateUtils';

interface WeekDaysProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export default function WeekDays({ selectedDate, onDateSelect }: WeekDaysProps) {
  const today = new Date();
  const { start: weekStart } = getWeekDates(selectedDate);
  
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    return {
      date,
      isToday: date.toDateString() === today.toDateString(),
    };
  });

  return (
    <div className="flex justify-between mb-6">
      {weekDays.map((day, index) => (
        <button
          key={index}
          onClick={() => onDateSelect(day.date)}
          className={`flex flex-col items-center p-2 min-w-[3rem] rounded-lg transition-colors ${
            day.isToday
              ? 'bg-blue-600 text-white ring-2 ring-green-400'
              : day.date.toDateString() === selectedDate.toDateString()
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <span className="text-sm">
            {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
          </span>
          <span className="text-lg font-semibold">
            {day.date.getDate()}
          </span>
        </button>
      ))}
    </div>
  );
}