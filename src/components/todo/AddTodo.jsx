import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/TodoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 bg-white p-5 rounded-xl shadow">
      <input
        className="border p-3 rounded-lg flex-1"
        placeholder="Yangi vazifa..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        onClick={() => {
          if (!text.trim()) return;
          dispatch(addTodo(text));
          setText("");
        }}>
        Qo‘shish
      </button>
    </div>
  );
}
export default AddTodo;
