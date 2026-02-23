import { Todo } from '@/types/todo';
import { useTodoStore } from '../lib/todo-store';
import { useState } from 'react';

export default function TodoItem({ todo }: { todo: Todo }) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const [editText, seteditText] = useState(false);
  const [textValue, setTextValue] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, textValue);
    // setTextValue('');
    seteditText(!editText);
  };
  return (
    <div
      className={`flex items-center gap-3 p-3 border rounded-lg ${todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'}`}
    >
      {/* checkBox */}
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="w-5 h-5 text-blue-600"
        onClick={() => toggleTodo(todo.id)}
      />

      {/* Text todo */}
      <div className="flex-1">
        <span
          className={
            todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
          }
        >
          {editText ? (
            <input
              className="flex-1 px-1 py-2 border rounded-lg"
              defaultValue={todo.text}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={(e) => {
                e.key === 'Enter' && handleEdit();
              }}
            />
          ) : (
            todo.text
          )}
        </span>
      </div>

      <div className="flex gap-1">
        <>
          {!editText ? (
            <button
              className="text-sm text-blue-600 hover:underline"
              onClick={() => seteditText(!editText)}
            >
              Edit
            </button>
          ) : (
            <button
              className="text-sm text-green-500 hover:underline"
              onClick={handleEdit}
            >
              Save
            </button>
          )}
          <button
            className="text-sm text-red-600 hover:underline"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </>
      </div>
    </div>
  );
}
