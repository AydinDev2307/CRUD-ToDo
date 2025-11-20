import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../../features/todo/TodoSlice";
import { useState } from "react";

function TodoList() {
  const todos = useSelector((s) => s.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  return (
    <div className="mt-6 space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white p-5 rounded-xl shadow flex justify-between items-center">

          <div className="flex items-center gap-4 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5"
            />

            {editId === todo.id ? (
              <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="border p-2 rounded-lg flex-1"
              />
            ) : (
              <span
                className={`text-xl ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}>
                {todo.text}
              </span>
            )}
          </div>

          {editId === todo.id ? (
            <button
              onClick={() => {
                dispatch(editTodo({ id: todo.id, newText }));
                setEditId(null);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Saqlash
            </button>
          ) : (
            <button
              onClick={() => {
                setEditId(todo.id);
                setNewText(todo.text);
              }}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Tahrirlash
            </button>
          )}

          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-600 text-white px-4 py-2 rounded-lg ml-[10px]">
            O‘chirish
          </button>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
