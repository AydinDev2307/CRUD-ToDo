import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import ProductsPage from './pages/ProductPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserSettings from './pages/UserSettings';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <TodoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRoles={['user', 'admin']}>
              <UserSettings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404: Sahifa topilmadi</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
