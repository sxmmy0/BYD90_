// filepath: /Users/sxmmy/Documents/Projects/BYD90_/BYD90_/frontend/src/components/NavBar.tsx

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

console.log('NavBar rendered');

export default function Navbar() {
  const navigate = useNavigate();
  const { role, setRole } = useAuth();
  const token = localStorage.getItem('accessToken');

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setRole(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <div className="font-bold text-xl">BYD90</div>
      <div className="space-x-4">
        {token && role ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout} className="text-red-400 hover:text-red-300">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}