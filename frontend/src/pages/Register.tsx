import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('auth/register/', form);
      navigate('/login');
    } catch {
      alert('Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <input name="username" placeholder="Username" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange} />
        <input name="email" placeholder="Email" className="w-full p-2 mb-2 bg-gray-700 rounded" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-4 bg-gray-700 rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 p-2 rounded">Register</button>
      </form>
    </div>
  );
}
