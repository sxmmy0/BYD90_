import { useEffect, useState } from 'react';
import API from '../services/api';

type Drill = {
  id: number;
  title: string;
  position?: string;
  difficulty?: string;
  description?: string;
  video_url?: string;
};

export default function Drills() {
  const [drills, setDrills] = useState<Drill[]>([]);

  useEffect(() => {
    API.get('drills/').then(res => setDrills(res.data as Drill[]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl mb-4">Training Drills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {drills.map((drill: any) => (
          <div key={drill.id} className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold">{drill.title}</h3>
            <p className="text-sm text-gray-400">{drill.position} | {drill.difficulty}</p>
            <p className="mt-2">{drill.description}</p>
            {drill.video_url && (
              <div className="mt-3">
                <iframe
                  src={drill.video_url}
                  className="w-full aspect-video rounded"
                  allowFullScreen
                  title={`Drill video: ${drill.title || drill.id}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
