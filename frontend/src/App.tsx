import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
import Drills from './pages/Drills';
import Profile from './pages/Profile';
import Coaches from './pages/Coaches';
import CoachDashboard from './pages/CoachDashboard';
import PlayerDashboard from './pages/PlayerDashboard';
import Logout from './pages/Logout';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/coaches" element={<ProtectedRoute><Coaches /></ProtectedRoute>} />
        <Route path="/drills" element={<ProtectedRoute><Drills /></ProtectedRoute>} />
        <Route path="/coach-dashboard" element={<CoachDashboard />} />
        <Route path="/player-dashboard" element={<PlayerDashboard />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

