import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // <-- import

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { setRole } = useAuth(); // <-- use context

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Login and store access token
      const res = await API.post<{ access: string }>('auth/login/', form);
      const token = res.data.access;
      localStorage.setItem('accessToken', token);

      // Fetch user profile with token
      const profileRes = await API.get<{ role: string }>('auth/profile/');
      const role = profileRes.data.role;
      setRole(role); // <-- update context

      // Redirect based on role
      if (role === 'coach') {
        navigate('/coach-dashboard');
      } else {
        navigate('/player-dashboard');
      }
    } catch (err) {
      alert('Login failed.');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          name="username"
          onChange={handleChange}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="w-full p-2 mb-3 bg-gray-700 rounded"
          placeholder="Password"
        />
        <button type="submit" className="w-full bg-blue-600 p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}