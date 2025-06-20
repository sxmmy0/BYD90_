import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type AuthContextType = {
  role: string | null;
  setRole: (role: string | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  role: null,
  setRole: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string | null>(null);

  // Debug log to confirm render
  console.log('✅ AuthProvider rendered, current role:', role);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      console.log('✅ Token found in localStorage');
      // Optional: preload role here if your backend supports it
    }
  }, []);

  return (
  <AuthContext.Provider value={{ role, setRole }}>
    <div className="bg-blue-900 text-white text-sm p-1">
      <strong>AuthContext:</strong> Role = {role || 'none'}
    </div>
    {children}
  </AuthContext.Provider>
);
};
