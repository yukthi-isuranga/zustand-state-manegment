import { Todo } from '@/types/todo';
import { create } from 'zustand';

interface TodoSore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
export const useTodoStore = create<TodoSore>((set) => ({
  todos: [
    {
      id: '001',
      text: 'Learn Zustand',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '002',
      text: 'Build a Todo App',
      completed: true,
      createdAt: new Date(),
    },
  ],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now().toString(),
          text,
          completed: false,
          createdAt: new Date(),
        },
      ],
    })),
  // delete todo by id
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // toggle todo completed by id
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
}));
