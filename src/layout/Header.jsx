import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/AuthSlice';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <header className="w-full bg-gray-900 text-white p-4">
        <nav className="w-[80%] flex text-xl justify-between container mx-auto">
          <h1
            onClick={goHome}
            className="cursor-pointer text-[24px] font-[600]">
            AUTH App
          </h1>
          <div className="flex gap-6 items-center">
            <NavLink to="/">Home</NavLink>

            {isLoggedIn ? (
              <>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/settings">Settings</NavLink>

                {user.role === 'admin' && (
                  <NavLink to="/admin" className="text-yellow-400">
                    Admin Panel
                  </NavLink>
                )}

                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded text-base hover:bg-red-700 transition">
                  Logout ({user.name})
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
