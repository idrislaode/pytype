import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserProgress {
  [levelId: number]: {
    completed: boolean;
    bestWpm: number;
    bestAccuracy: number;
  };
}

interface UserContextType {
  userName: string;
  setUserName: (name: string) => void;
  progress: UserProgress;
  updateProgress: (levelId: number, wpm: number, accuracy: number) => void;
  isLoggedIn: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userName, setUserNameState] = useState<string>('');
  const [progress, setProgress] = useState<UserProgress>({});

  useEffect(() => {
    const savedName = localStorage.getItem('pythontype_username');
    const savedProgress = localStorage.getItem('pythontype_progress');
    
    if (savedName) {
      setUserNameState(savedName);
    }
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const setUserName = (name: string) => {
    setUserNameState(name);
    localStorage.setItem('pythontype_username', name);
  };

  const updateProgress = (levelId: number, wpm: number, accuracy: number) => {
    setProgress((prev) => {
      const current = prev[levelId];
      const newProgress = {
        ...prev,
        [levelId]: {
          completed: true,
          bestWpm: current ? Math.max(current.bestWpm, wpm) : wpm,
          bestAccuracy: current ? Math.max(current.bestAccuracy, accuracy) : accuracy,
        },
      };
      localStorage.setItem('pythontype_progress', JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const logout = () => {
    setUserNameState('');
    localStorage.removeItem('pythontype_username');
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        progress,
        updateProgress,
        isLoggedIn: !!userName,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
