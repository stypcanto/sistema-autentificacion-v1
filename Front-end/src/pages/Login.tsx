// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';  // Asumimos que tienes esta función de API que hace la solicitud al backend

const Login = () => {
  // Estados para almacenar email, password y mensajes de error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Enviando datos: ", { email, password }); // Verifica estos valores

    try {
      // Llamamos a la función loginUser pasándole email y password
      const data = await loginUser(email, password);

      // Verificamos si se recibió el token
      if (data.token) {
        // Guardamos el token en el localStorage
        localStorage.setItem('token', data.token);

        // Opcionalmente, también puedes guardar información del usuario si el backend la devuelve
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        // Navegamos a la página de inicio (o la que desees)
        navigate('/home');
      } else {
        // Si no hay token, mostramos el mensaje de error retornado por el servidor
        setError(data.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      // Si ocurre un error en la solicitud
      setError('Error al iniciar sesión');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-sky-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-500 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
