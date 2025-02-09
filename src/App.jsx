// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Producto from './pages/Producto';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login'; // Importa la página de login
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Función para manejar el login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                {/* Ruta de login */}
                <Route
                    path="/login"
                    element={<Login onLogin={handleLogin} />} // Pasa la función de login como prop
                />

                {/* Rutas protegidas */}
                <Route
                    path="/"
                    element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/productos"
                    element={isAuthenticated ? <Producto /> : <Navigate to="/login" />}
                />
                <Route
                    path="/chatbot"
                    element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default App;