import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Definir una interfaz para el usuario
interface User {
  username: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null); // Establecer tipo explícito para el estado de user
  const [loading, setLoading] = useState(true); // Nuevo estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }

    setLoading(false); // Cambiar el estado de carga a falso después de la verificación
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Mostrar carga mientras se obtienen los datos
  }

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user data available.</p> // Mensaje si no hay datos del usuario
      )}
    </div>
  );
};

export default Profile;
