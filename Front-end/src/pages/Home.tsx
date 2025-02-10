import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Definir una interfaz para el usuario
interface User {
  username: string;
  email: string;
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null); // Establecer tipo explícito para el estado de user
  const [loading, setLoading] = useState(true); // Nuevo estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login'); // Redirigir si no hay token
    } else {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData)); // Establecer los datos del usuario
      }
    }

    setLoading(false); // Cambiar el estado de carga a falso después de la verificación
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div> {/* Mostrar carga mientras se obtienen los datos */}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600">Welcome, {user ? user.username : 'Guest'}</h1>
      <p className="text-lg text-gray-700 mt-4">
        This is a private page for authenticated users only. Explore your profile and other features.
      </p>
      <div className="mt-6">
        <p className="text-gray-500">Email: {user ? user.email : 'Not available'}</p>
      </div>
    </div>
  );
};

export default Home;
