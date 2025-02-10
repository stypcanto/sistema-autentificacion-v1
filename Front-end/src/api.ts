// src/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:5001'; // Asegúrate de que el puerto sea correcto

// Tipado para la respuesta esperada del servidor
interface ApiResponse {
  token: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
  message?: string;
}

// Función para registrar un usuario
export const registerUser = async (username: string, email: string, password: string): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error('Error en registerUser:', error);
    throw new Error('No se pudo registrar el usuario.');
  }
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:5001/login', {
      username: email,  // Asumí que en tu backend usas 'username', si no es así, cambia a 'email'
      password,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Captura los detalles del error de Axios
      console.error('AxiosError', error.response?.data); // Esto te dará más información sobre el error
      throw new Error(error.response?.data.message || 'No se pudo iniciar sesión.');
    } else {
      console.error('Error inesperado:', error);
      throw new Error('No se pudo iniciar sesión.');
    }
  }
};

// Función para obtener el perfil (requiere token en los headers)
export const getProfile = async (token: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error en getProfile:', error);
    throw new Error('No se pudo obtener el perfil.');
  }
};
