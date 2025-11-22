import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <h1 className="text-5xl font-extrabold mb-6">Home Page</h1>

        {isLoggedIn ? (
          <p className="text-2xl text-green-700">
            Xush kelibsiz, **{user.name}**! Siz tizimga **{user.role}** sifatida
            kirgansiz.
          </p>
        ) : (
          <p className="text-2xl text-gray-700">
            Iltimos, **Login** yoki **Register** qiling.
          </p>
        )}

        <p className="mt-8 text-lg">
          Bu sahifa hamma uchun ochiq. Kirgandan keyin Products sahifasiga
          o'tishingiz mumkin.
        </p>
      </div>
    </main>
  );
};

export default Home;
