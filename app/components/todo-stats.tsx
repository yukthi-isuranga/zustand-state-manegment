import React from 'react';
import { useTodoStore } from '../lib/todo-store';

export default function TodoStats() {
  const totals = useTodoStore((state) => state.getTotals);

  const stats = totals();
  // const stats = {
  //   total: 10,
  //   active: 5,
  //   completed: 5,
  // };
  return (
    <div className="mb-4 text-center">
      <div className="inline-flex items-center gap-4 px-4 py-2 bg-gray-100 rounded">
        <span>Total: {stats.total}</span>
        <span>Active: {stats.active}</span>
        <span>Completed: {stats.completed}</span>
      </div>
    </div>
  );
}
