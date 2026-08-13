import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserProfile {
  experienceLevel: string;
  xp: number;
  streak: number;
  totalLessonsCompleted: number;
  totalChallengesCompleted: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  profile: UserProfile;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  updateXp: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('dsa_user');
    return savedUser ? JSON.parse(savedUser) : {
      id: "u1",
      name: "Rahul Sharma",
      email: "rahul@college.edu.in",
      profile: {
        experienceLevel: "BEGINNER",
        xp: 350,
        streak: 4,
        totalLessonsCompleted: 3,
        totalChallengesCompleted: 1
      }
    };
  });

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('dsa_token') || 'demo_token';
  });

  const login = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('dsa_token', newToken);
    localStorage.setItem('dsa_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('dsa_token');
    localStorage.removeItem('dsa_user');
  };

  const updateXp = (amount: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        profile: {
          ...user.profile,
          xp: user.profile.xp + amount,
          totalLessonsCompleted: user.profile.totalLessonsCompleted + 1
        }
      };
      setUser(updatedUser);
      localStorage.setItem('dsa_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateXp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
