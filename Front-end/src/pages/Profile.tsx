// src/pages/Profile.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api'; // Importamos getProfile en lugar de loginUser

// Definir una interfaz para el usuario
interface User {
  username: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null); // Estado para el usuario
  const [loading, setLoading] = useState(true);          // Estado para la carga
  const [error, setError] = useState('');                // Estado para errores
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Si no existe token, redirigimos al login
        navigate('/login');
        return;
      }

      try {
        // Llamamos a la función getProfile pasando el token
        const data = await getProfile(token);

        // Suponiendo que el back-end retorna { user: { ... } } en caso de éxito
        if (data.user) {
          setUser(data.user);
        } else {
          setError(data.message || 'No se pudieron obtener los datos del usuario.');
        }
      } catch (err) {
        console.error('Error al obtener el perfil:', err);
        setError('Error al obtener el perfil.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se obtiene la información
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {user ? (
        <>
          <p className="text-lg">Username: {user.username}</p>
          <p className="text-lg">Email: {user.email}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
