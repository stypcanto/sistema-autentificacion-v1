import { Link } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token'); // Verificar si el usuario está autenticado

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/home" className="hover:text-gray-300">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-300">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  window.location.href = '/login'; // Redirigir al login
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
