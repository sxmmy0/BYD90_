import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'player',
    playing_position: '',
    team_supported: '',
    team_played_for: '',
    coaching_focus: '',
    coaching_style: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('auth/register/', form);
      navigate('/login');
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded w-96 space-y-3">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded">
          <option value="player">I'm a Player</option>
          <option value="coach">I'm a Coach</option>
        </select>

        <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />

        {form.role === 'player' && (
          <>
            <input name="playing_position" placeholder="Position (e.g. Winger)" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
            <input name="team_supported" placeholder="Team You Support" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
            <input name="team_played_for" placeholder="Team You Play For" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
          </>
        )}

        {form.role === 'coach' && (
          <>
            <input name="coaching_focus" placeholder="Focus (e.g. Midfielders, Fitness)" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
            <textarea name="coaching_style" placeholder="Describe your coaching style" onChange={handleChange} className="w-full p-2 bg-gray-700 rounded"></textarea>
          </>
        )}

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 p-2 rounded">Register</button>
      </form>
    </div>
  );
}
