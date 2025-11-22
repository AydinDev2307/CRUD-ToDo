import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, updateProfile } from '../features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

const UserSettings = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || '');
  const [newEmail, setNewEmail] = useState(user?.email || '');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleSaveProfile = () => {
    if (!newName.trim() || !newEmail.trim()) {
      alert("Ism va Email bo'sh bo'lishi mumkin emas.");
      return;
    }
    dispatch(updateProfile({ name: newName, email: newEmail }));
    setIsEditing(false);
    alert("Profil ma'lumotlari muvaffaqiyatli yangilandi!");
  };

  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8">
          👤 Foydalanuvchi Sozlamalari
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg">
          <p className="text-xl mb-4">
            <span className="font-semibold">Ism:</span>
            {isEditing ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border p-1 ml-2 rounded w-full max-w-xs"
              />
            ) : (
              <span className="ml-2">{user?.name}</span>
            )}
          </p>

          <p className="text-xl mb-4">
            <span className="font-semibold">Email:</span>
            {isEditing ? (
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="border p-1 ml-2 rounded w-full max-w-xs"
              />
            ) : (
              <span className="ml-2">{user?.email}</span>
            )}
          </p>

          <p className="text-xl mb-6">
            <span className="font-semibold">Rol:</span>{' '}
            <span className="uppercase font-bold text-blue-600 ml-2">
              {user?.role}
            </span>
          </p>

          <div className="flex gap-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSaveProfile}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                  Saqlash
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setNewName(user?.name);
                    setNewEmail(user?.email);
                  }}
                  className="bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
                  Bekor Qilish
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Tahrirlash
              </button>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition ml-auto">
              Logout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserSettings;
