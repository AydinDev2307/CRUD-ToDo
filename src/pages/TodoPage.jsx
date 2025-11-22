import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';

function TodoPage() {
  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">Todo Page</h1>
        <AddTodo />
        <TodoList />
      </div>
    </main>
  );
}

export default TodoPage;
