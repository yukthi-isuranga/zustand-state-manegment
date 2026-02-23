import { Todo } from '@/types/todo';

export default function TodoItem({ todo }: { todo: Todo }) {
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
      />

      {/* Text todo */}
      <div className="flex-1">
        <span
          className={
            todo.completed ? 'line-through text-gray-500' : 'text-gray-900'
          }
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-1">
        <>
          <button className="text-sm text-blue-600 hover:underline">
            Edit
          </button>
          <button className="text-sm text-red-600 hover:underline">
            Delete
          </button>
        </>
      </div>
    </div>
  );
}
