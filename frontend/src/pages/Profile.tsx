import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [form, setForm] = useState<any>({});

  useEffect(() => {
    API.get('users/me/').then(res => {
      setProfile(res.data);
      setForm(res.data); // Set initial form state
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    try {
      await API.patch('users/me/', form);
      alert('Profile updated!');
    } catch {
      alert('Failed to update profile.');
    }
  };

  if (!profile) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl mb-4">Player Profile</h2>
      <div className="space-y-3">
        <input name="bio" value={form.bio || ''} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" placeholder="Bio" />
        <input name="location" value={form.location || ''} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" placeholder="Location" />
        <input name="team_supported" value={form.team_supported || ''} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" placeholder="Team Supported" />
        <input name="team_played_for" value={form.team_played_for || ''} onChange={handleChange} className="w-full p-2 bg-gray-800 rounded" placeholder="Team You Play For" />
        <button onClick={handleUpdate} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Save</button>
      </div>
    </div>
  );
}
