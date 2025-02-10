// api.js
const API_URL = 'http://localhost:5000/api/auth'; // La URL de tu backend

// Función para manejar el registro de un usuario
export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error('Error en el registro');
    }

    const data = await response.json();
    return data; // Puedes devolver la respuesta del backend (token, mensaje, etc.)
  } catch (error) {
    throw new Error(error.message || 'Error al registrar el usuario');
  }
};

// Función para manejar el login de un usuario
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Error en el login');
    }

    const data = await response.json();
    return data; // Puedes devolver el token y los datos del usuario
  } catch (error) {
    throw new Error(error.message || 'Error al iniciar sesión');
  }
};
