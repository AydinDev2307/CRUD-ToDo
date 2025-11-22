import React from 'react';
import { useSelector } from 'react-redux';

const AdminPanel = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <h1 className="text-4xl font-bold mb-8 text-yellow-600">
          👑 Admin Panel Sahifasi
        </h1>

        {user?.role === 'admin' ? (
          <div className="bg-gray-800 text-white p-8 rounded-xl shadow-lg">
            <p className="text-2xl mb-4">
              Xush kelibsiz, <span className="font-extrabold">{user.name}</span>
              !
            </p>
            <p className="text-lg">
              Bu sahifani faqat siz, ya'ni **Adminlar** ko'ra olasiz.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Mahsulot CRUD: **Products** sahifasida mavjud.</li>
            </ul>
          </div>
        ) : (
          <p className="text-red-500 text-2xl">Ruxsat yo'q!</p>
        )}
      </div>
    </main>
  );
};

export default AdminPanel;
