import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginSuccess } from '../../features/auth/AuthSlice';

const MOCK_USERS = [
  { id: 101, name: 'Admin User', email: 'admin@test.com', role: 'admin' },
  { id: 102, name: 'Simple User', email: 'user@test.com', role: 'user' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Iltimos, email va parolni to'ldiring.");
      return;
    }

    const foundUser = MOCK_USERS.find((u) => u.email === email);

    if (foundUser && password === '123') {
      const token = `fake-token-${foundUser.id}-${Date.now()}`;

      dispatch(loginSuccess({ user: foundUser, token }));

      const from = location.state?.from?.pathname || '/products';
      navigate(from, { replace: true });
    } else {
      alert("Noto'g'ri email yoki parol. (Test paroli: 123)");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Tizimga kirish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email (admin@test.com yoki user@test.com)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Parol (123)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
