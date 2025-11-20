import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import CrudPage from "./pages/CrudPage";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full bg-gray-900 text-white p-4 flex gap-6 text-xl">
        <Link to="/todo">Todo</Link>
        <Link to="/crud">CRUD</Link>
      </div>

      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
