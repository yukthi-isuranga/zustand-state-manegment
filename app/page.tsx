import AddTodoForm from './components/add-todo-form';
import TodoItem from './components/todo-items';
import TodoStats from './components/todo-stats';

export default function Home() {
  const todos = [
    { id: 1, text: 'Learn Zustand', completed: false, createdAt: new Date() },
    { id: 2, text: 'Build a Todo App', completed: true, createdAt: new Date() },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-4 text-black">
        <h1 className="text-3xl font-bold text-center mb-6 ">Todo App</h1>
        <AddTodoForm />
        <TodoStats />
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center py-4 text-gray-500">No todos yet</p>
          ) : (
            todos.map((item) => <TodoItem key={item.id} todo={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
