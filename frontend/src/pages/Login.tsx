import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post<{ access: string }>('auth/login/', form);
      localStorage.setItem('accessToken', res.data.access);
      navigate('/dashboard');
    } catch {
      alert('Login failed.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <input name="username" onChange={handleChange} className="w-full p-2 mb-3 bg-gray-700 rounded" placeholder="Username" />
        <input type="password" name="password" onChange={handleChange} className="w-full p-2 mb-3 bg-gray-700 rounded" placeholder="Password" />
        <button type="submit" className="w-full bg-blue-600 p-2 rounded hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
}
