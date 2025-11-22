import React from 'react';
import Login from '../components/auth/Login';

function LoginPage() {
  return (
    <main className="w-full h-screen">
      <div className="w-[1600px] mx-auto p-10">
        <Login />
      </div>
    </main>
  );
}

export default LoginPage;
