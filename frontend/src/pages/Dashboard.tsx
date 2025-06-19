import { useEffect, useState } from 'react';
import API from '../services/api';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    API.get('users/me/')
      .then(res => setUser(res.data))
      .catch(() => alert('You are not authorized.'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading user data...</p>}
    </div>
  );
}
