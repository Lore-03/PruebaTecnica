// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TiendaPC</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Inicio</Link>
        <Link to="/productos" className="hover:text-gray-400">Productos</Link>
        <Link to="/chatbot" className="hover:text-gray-400">Chatbot</Link>
        <Link to="/login">
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
          Iniciar Sesión
        </button>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
