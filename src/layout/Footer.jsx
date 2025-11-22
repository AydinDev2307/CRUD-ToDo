import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white pt-12 pb-6 border-t border-gray-700">
      <div className="w-[80%] mx-auto container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-extrabold text-blue-400 mb-4">
            AUTH App
          </h2>
          <p className="text-sm text-gray-400">
            Foydalanuvchilarni boshqarish va rollarga asoslangan kirish nazorati
            tizimi.
          </p>
          <p className="text-xs text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} AUTH App. Barcha huquqlar
            himoyalangan.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
            Bo'limlar
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-400 transition duration-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="hover:text-blue-400 transition duration-300">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo"
                className="hover:text-blue-400 transition duration-300">
                Todo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className="hover:text-blue-400 transition duration-300">
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
            Bizni Kuzating
          </h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition duration-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-1">
            Aloqa
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex flex-col">
              <span className="font-medium text-gray-300">Email:</span>
              <a href="mailto:info@authapp.uz" className="hover:text-blue-400">
                info@authapp.uz
              </a>
            </li>
            <li className="flex flex-col">
              <span className="font-medium text-gray-300">Telefon:</span>
              <a href="tel:+998901234567" className="hover:text-blue-400">
                +998 90 123 45 67
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
