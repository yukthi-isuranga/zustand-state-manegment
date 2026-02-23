import { Todo, Totals } from '@/types/todo';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TodoSore {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  getTotals: () => Totals;
}
export const useTodoStore = create<TodoSore>()(
  persist(
    (set, get) => ({
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

      // edit todo text
      editTodo: (id: string, text: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  // text: todo.id === id ? text : todo.text,
                  text: text,
                }
              : todo,
          ),
        })),

      // Get Computed Values
      getTotals: () => {
        const { todos } = get();
        return {
          total: todos.length,
          active: todos.filter((e) => !e.completed).length,
          completed: todos.filter((e) => e.completed).length,
        };
      },
    }),
    { name: 'todo-local-storage' },
  ),
);
