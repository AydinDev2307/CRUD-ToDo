import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerSuccess } from '../../features/auth/AuthSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [role, setRole] = useState('user');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    
    if (password !== confirmPassword) {
        alert("Parollar mos kelmadi!");
        return; 
    }
    
    const token = `fake-token-${Date.now()}`; 
    
    const newUser = {
      id: Date.now(), 
      name,
      email,
      role,
      token,
    };

    dispatch(registerSuccess({ user: newUser, token })); 
    
    navigate('/products'); 
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Ro'yxatdan o'tish</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Ismingiz" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        
        <input 
          type="password" 
          placeholder="Parol" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input 
          type="password" 
          placeholder="Parolni takrorlang" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Rolni tanlang (Test uchun)</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg">
            <option value="user">Oddiy User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default Register;