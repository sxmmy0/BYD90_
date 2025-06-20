import { useEffect, useState } from 'react';
import API from '../services/api';

type Coach = {
  id: number;
  user?: { username?: string };
  bio?: string;
  price_per_session?: number;
};

export default function Coaches() {
  const [coaches, setCoaches] = useState<Coach[]>([]);

  useEffect(() => {
    API.get('coaches/').then(res => setCoaches(res.data as Coach[]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl mb-4">Find a Coach</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {coaches.map((coach: any) => (
          <div key={coach.id} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold">{coach.user?.username || 'Coach'}</h3>
            <p>{coach.bio}</p>
            <p className="mt-2 text-green-400">£{coach.price_per_session} / session</p>
            <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
