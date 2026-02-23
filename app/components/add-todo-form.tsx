'use client';
import { useState } from 'react';
import { useTodoStore } from '../lib/todo-store';

export default function AddTodoForm() {
  const [input, setInput] = useState('');
  const addTodos = useTodoStore((state) => state.addTodo);

  const handleSubmit = () => {
    console.log('submit:', input);
    if (input) {
      addTodos(input);
      setInput('');
    }
  };
  return (
    <div className="mb-6 flex gap-2">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === 'Enter' && handleSubmit();
        }}
        type="text"
        className="flex-1 px-1 py-2 border rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        +
      </button>
    </div>
  );
}
