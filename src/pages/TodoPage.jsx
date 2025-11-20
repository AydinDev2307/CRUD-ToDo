import AddTodo from "../components/todo/AddTodo";
import TodoList from "../components/todo/TodoList";

function TodoPage() {
  return (
    <div className="w-[1600px] mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">Todo Page</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default TodoPage;
